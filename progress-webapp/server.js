const express = require("express");
const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");
const { marked } = require("marked");

const app = express();
const PORT = process.env.PORT || 4173;

const WORKSPACE_ROOT = path.resolve(__dirname, "..");
const TRIALS_ROOT = path.join(WORKSPACE_ROOT, "Trials");
const GENERATED_ROOT = path.join(TRIALS_ROOT, "Generated");
const PYTHON_MINITRIALS_ROOT = path.join(TRIALS_ROOT, "Python MiniTrials");
const WIP_ROOT = path.join(WORKSPACE_ROOT, "Work In Progress");
const STATE_FILE = path.join(WIP_ROOT, "project-tracker-state.json");
const SETTINGS_FILE = path.join(WIP_ROOT, "settings.json");

marked.setOptions({ gfm: true, breaks: true });

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

function ensureStateFile() {
  if (!fs.existsSync(WIP_ROOT)) {
    fs.mkdirSync(WIP_ROOT, { recursive: true });
  }
  if (!fs.existsSync(STATE_FILE)) {
    fs.writeFileSync(STATE_FILE, JSON.stringify({ projects: {} }, null, 2), "utf8");
  }
}

function ensureSettingsFile() {
  if (!fs.existsSync(WIP_ROOT)) {
    fs.mkdirSync(WIP_ROOT, { recursive: true });
  }
  if (!fs.existsSync(SETTINGS_FILE)) {
    fs.writeFileSync(SETTINGS_FILE, JSON.stringify({ darkMode: false }, null, 2), "utf8");
  }
}

function ensureWipRoots() {
  if (!fs.existsSync(WIP_ROOT)) {
    fs.mkdirSync(WIP_ROOT, { recursive: true });
  }
  const pythonWipRoot = path.join(WIP_ROOT, "Python MiniTrials");
  if (!fs.existsSync(pythonWipRoot)) {
    fs.mkdirSync(pythonWipRoot, { recursive: true });
  }
  return pythonWipRoot;
}

function normalizeFilters(filters = {}) {
  const allowedStatuses = ["working-on", "postponed", "done", "not-set"];
  const allowedCategories = ["generated", "python-mini-trials"];

  return {
    statuses: Array.isArray(filters.statuses) ? filters.statuses.filter((value) => allowedStatuses.includes(value)) : [],
    categories: Array.isArray(filters.categories) ? filters.categories.filter((value) => allowedCategories.includes(value)) : [],
    search: typeof filters.search === "string" ? filters.search : "",
  };
}

function readSettings() {
  ensureSettingsFile();
  try {
    const parsed = JSON.parse(fs.readFileSync(SETTINGS_FILE, "utf8"));
    return {
      darkMode: Boolean(parsed.darkMode),
      filters: normalizeFilters(parsed.filters),
    };
  } catch {
    return { darkMode: false, filters: normalizeFilters({}) };
  }
}

function writeSettings(settings) {
  ensureSettingsFile();
  const nextSettings = {
    darkMode: Boolean(settings?.darkMode),
    filters: normalizeFilters(settings?.filters),
  };
  fs.writeFileSync(SETTINGS_FILE, JSON.stringify(nextSettings, null, 2), "utf8");
}

function readState() {
  ensureStateFile();
  try {
    return JSON.parse(fs.readFileSync(STATE_FILE, "utf8"));
  } catch {
    return { projects: {} };
  }
}

function writeState(state) {
  ensureStateFile();
  fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2), "utf8");
}

function parseProjectNumber(folderName) {
  const match = folderName.match(/^\[(\d+)\]/);
  return match ? Number(match[1]) : Number.MAX_SAFE_INTEGER;
}

function safeSlug(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

function vscodeFileLink(absPath) {
  const normalized = absPath.replace(/\\/g, "/");
  return `vscode://file/${encodeURI(normalized)}`;
}

function readProjectDirs(baseDir, bucket) {
  if (!fs.existsSync(baseDir)) return [];
  const wipBaseDir = bucket === "python-mini-trials" ? path.join(WIP_ROOT, "Python MiniTrials") : WIP_ROOT;
  return fs
    .readdirSync(baseDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => {
      const folderName = d.name;
      const absPath = path.join(baseDir, folderName);
      const id = `${parseProjectNumber(folderName)}-${safeSlug(folderName)}`;
      const wipPath = path.join(wipBaseDir, folderName);
      return {
        id,
        number: parseProjectNumber(folderName),
        folderName,
        bucket,
        bucketLabel: bucket === "generated" ? "Generated" : "Python MiniTrials",
        absPath,
        isGenerated: bucket === "generated",
        isPythonMiniTrials: bucket === "python-mini-trials",
        hasWipCopy: fs.existsSync(wipPath),
        wipBaseDir,
        wipPath,
      };
    });
}

function compareProjects(a, b) {
  const statusOrder = { "working-on": 0, postponed: 1, "not-set": 2, done: 3 };
  const bucketOrder = { generated: 0, "python-mini-trials": 1 };

  const statusDelta = (statusOrder[a.status] ?? 2) - (statusOrder[b.status] ?? 2);
  if (statusDelta !== 0) return statusDelta;

  const bucketDelta = (bucketOrder[a.bucket] ?? 99) - (bucketOrder[b.bucket] ?? 99);
  if (bucketDelta !== 0) return bucketDelta;

  if (a.number !== b.number) return a.number - b.number;

  return a.folderName.localeCompare(b.folderName);
}

function getAllProjects() {
  ensureWipRoots();
  const state = readState();
  const projects = [
    ...readProjectDirs(GENERATED_ROOT, "generated"),
    ...readProjectDirs(PYTHON_MINITRIALS_ROOT, "python-mini-trials"),
  ]
    .map((p) => {
      const status = state.projects[p.id]?.status || "not-set";
      return {
        ...p,
        status,
        vscodeOriginalLink: vscodeFileLink(p.absPath),
        vscodeWipLink: p.hasWipCopy ? vscodeFileLink(p.wipPath) : null,
      };
    })
    .sort(compareProjects);

  return projects;
}

function getAllProjectsLegacy() {
  ensureWipRoots();
  const state = readState();
  const projects = [
    ...readProjectDirs(GENERATED_ROOT, "generated"),
    ...readProjectDirs(PYTHON_MINITRIALS_ROOT, "python-mini-trials"),
  ]
    .map((p) => {
      const status = state.projects[p.id]?.status || "not-set";
      return {
        ...p,
        status,
        vscodeOriginalLink: vscodeFileLink(p.absPath),
        vscodeWipLink: p.hasWipCopy ? vscodeFileLink(p.wipPath) : null,
      };
    });

  return projects;
}

function findProjectById(projectId) {
  return getAllProjects().find((p) => p.id === projectId) || null;
}

function docFileName(docType) {
  const map = {
    todo: "TODO.md",
    readme: "README.md",
    progress: "PROGRESS.md",
    requirements: "REQUIREMENTS.md",
    template: "TEMPLATE.md",
  };
  return map[docType] || null;
}

app.get("/api/projects", (_req, res) => {
  res.json({ projects: getAllProjects() });
});

app.get("/api/settings", (_req, res) => {
  res.json(readSettings());
});

app.post("/api/settings", (req, res) => {
  const currentSettings = readSettings();
  const nextSettings = {
    ...currentSettings,
    ...req.body,
    filters: {
      ...currentSettings.filters,
      ...(req.body.filters || {}),
    },
  };

  if (typeof req.body.darkMode === "boolean") {
    nextSettings.darkMode = req.body.darkMode;
  }

  writeSettings(nextSettings);
  return res.json(readSettings());
});

app.post("/api/projects/:id/status", (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const allowed = new Set(["not-set", "working-on", "postponed", "done"]);

  if (!allowed.has(status)) {
    return res.status(400).json({ error: "Invalid status." });
  }

  const project = findProjectById(id);
  if (!project) {
    return res.status(404).json({ error: "Project not found." });
  }

  const state = readState();
  state.projects[id] = {
    ...(state.projects[id] || {}),
    status,
    updatedAt: new Date().toISOString(),
  };
  writeState(state);

  return res.json({ ok: true });
});

app.post("/api/projects/:id/copy-to-wip", (req, res) => {
  const { id } = req.params;
  const project = findProjectById(id);

  if (!project) {
    return res.status(404).json({ error: "Project not found." });
  }

  if (!fs.existsSync(WIP_ROOT)) {
    fs.mkdirSync(WIP_ROOT, { recursive: true });
  }
  if (!fs.existsSync(project.wipBaseDir)) {
    fs.mkdirSync(project.wipBaseDir, { recursive: true });
  }

  if (fs.existsSync(project.wipPath)) {
    fs.rmSync(project.wipPath, { recursive: true, force: true });
  }
  fs.cpSync(project.absPath, project.wipPath, { recursive: true });

  return res.json({ ok: true, wipPath: project.wipPath, vscodeWipLink: vscodeFileLink(project.wipPath) });
});

app.post("/api/projects/:id/open-folder", (req, res) => {
  const { id } = req.params;
  const target = req.query.target === "wip" ? "wip" : "original";
  const project = findProjectById(id);

  if (!project) {
    return res.status(404).json({ error: "Project not found." });
  }

  const folderPath = target === "wip" ? project.wipPath : project.absPath;
  if (!folderPath || !fs.existsSync(folderPath)) {
    return res.status(400).json({ error: "Requested folder does not exist." });
  }

  // Open in a new VS Code window.
  const child = spawn("cmd", ["/c", "code", "-n", folderPath], {
    detached: true,
    stdio: "ignore",
  });
  child.unref();

  return res.json({ ok: true });
});

app.get("/api/projects/:id/docs/:docType", (req, res) => {
  const { id, docType } = req.params;
  const source = req.query.source === "wip" ? "wip" : "original";

  const project = findProjectById(id);
  if (!project) {
    return res.status(404).json({ error: "Project not found." });
  }

  const file = docFileName(docType);
  if (!file) {
    return res.status(400).json({ error: "Unsupported document type." });
  }

  const basePath = source === "wip" ? project.wipPath : project.absPath;
  if (!basePath || !fs.existsSync(basePath)) {
    return res.json({ exists: false, markdown: "", html: "", path: null });
  }

  const fullPath = path.join(basePath, file);
  if (!fs.existsSync(fullPath)) {
    return res.json({ exists: false, markdown: "", html: "", path: fullPath });
  }

  const markdown = fs.readFileSync(fullPath, "utf8");
  const html = marked.parse(markdown || "");
  return res.json({ exists: true, markdown, html, path: fullPath, vscodeLink: vscodeFileLink(fullPath) });
});

ensureWipRoots();

app.listen(PORT, () => {
  console.log(`Trial progress app running at http://localhost:${PORT}`);
});
