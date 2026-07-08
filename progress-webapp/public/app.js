const state = {
  projects: [],
  selectedId: null,
  filters: {
    statuses: [],
    categories: [],
    search: "",
  },
  docType: "todo",
  docSource: "original",
};

const projectListEl = document.getElementById("projectList");
const projectDetailEl = document.getElementById("projectDetail");
const searchInput = document.getElementById("searchInput");
const summaryEl = document.getElementById("summary");
const themeToggle = document.getElementById("themeToggle");
const resetFiltersBtn = document.getElementById("resetFiltersBtn");
const statusCheckboxes = Array.from(document.querySelectorAll('input[data-filter-group="status"]'));
const categoryCheckboxes = Array.from(document.querySelectorAll('input[data-filter-group="category"]'));

async function api(path, options = {}) {
  const response = await fetch(path, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }
  return response.json();
}

function filteredProjects() {
  const selectedStatuses = state.filters.statuses;
  const selectedCategories = state.filters.categories;
  const q = state.filters.search.trim().toLowerCase();

  return state.projects.filter((p) => {
    const matchesSearch = !q || p.folderName.toLowerCase().includes(q) || String(p.number).includes(q);
    if (!matchesSearch) return false;

    const matchesStatus = !selectedStatuses.length || selectedStatuses.includes(p.status);
    if (!matchesStatus) return false;

    const matchesCategory = !selectedCategories.length || selectedCategories.includes(p.bucket);
    return matchesCategory;
  });
}

function statusBadge(status) {
  if (status === "working-on") return "Working On";
  if (status === "postponed") return "Postponed";
  if (status === "done") return "Done";
  return "Not Set";
}

function renderSummary() {
  const total = state.projects.length;
  const generated = state.projects.filter((p) => p.isGenerated).length;
  const miniTrials = state.projects.filter((p) => p.isPythonMiniTrials).length;
  const wip = state.projects.filter((p) => p.hasWipCopy).length;
  const working = state.projects.filter((p) => p.status === "working-on").length;
  summaryEl.innerHTML = `
    <div>Total: <strong>${total}</strong></div>
    <div>Generated: <strong>${generated}</strong></div>
    <div>Python MiniTrials: <strong>${miniTrials}</strong></div>
    <div>In WIP: <strong>${wip}</strong></div>
    <div>Working On: <strong>${working}</strong></div>
  `;
}

function renderProjectList() {
  const projects = filteredProjects();
  if (!projects.length) {
    projectListEl.innerHTML = '<div class="empty-state">No projects match this filter.</div>';
    return;
  }

  projectListEl.innerHTML = projects
    .map((p) => {
      const activeClass = p.id === state.selectedId ? "active" : "";
      return `
        <button class="project-card ${activeClass}" data-id="${p.id}">
          <h3 class="project-title">${escapeHtml(p.folderName)}</h3>
          <div class="badges">
            <span class="badge ${p.isGenerated ? "generated" : p.isPythonMiniTrials ? "python-mini-trials" : ""}">${p.bucketLabel}</span>
            <span class="badge status-${p.status}">${statusBadge(p.status)}</span>
            ${p.hasWipCopy ? '<span class="badge">WIP copy</span>' : ""}
          </div>
        </button>
      `;
    })
    .join("");

  projectListEl.querySelectorAll(".project-card").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.selectedId = btn.dataset.id;
      state.docSource = "original";
      renderProjectList();
      renderProjectDetail();
    });
  });
}

function currentProject() {
  return state.projects.find((p) => p.id === state.selectedId) || null;
}

async function updateStatus(projectId, status) {
  await api(`/api/projects/${encodeURIComponent(projectId)}/status`, {
    method: "POST",
    body: JSON.stringify({ status }),
  });
  await refresh();
  state.selectedId = projectId;
  renderProjectList();
  renderProjectDetail();
}

async function copyToWip(projectId) {
  await api(`/api/projects/${encodeURIComponent(projectId)}/copy-to-wip`, { method: "POST" });
  await refresh();
  state.selectedId = projectId;
  renderProjectList();
  renderProjectDetail();
}

async function loadDoc(project, docType, source) {
  const url = `/api/projects/${encodeURIComponent(project.id)}/docs/${encodeURIComponent(docType)}?source=${encodeURIComponent(source)}`;
  return api(url);
}

async function renderProjectDetail() {
  const project = currentProject();
  if (!project) {
    projectDetailEl.className = "detail-card empty-state";
    projectDetailEl.innerHTML = "Select a project to view details and markdown docs.";
    return;
  }

  projectDetailEl.className = "detail-card";
  projectDetailEl.innerHTML = `
    <div class="detail-header">
      <h2 class="detail-title">${escapeHtml(project.folderName)}</h2>
      <select id="statusSelect">
        <option value="not-set" ${project.status === "not-set" ? "selected" : ""}>Not Set</option>
        <option value="working-on" ${project.status === "working-on" ? "selected" : ""}>Working On</option>
        <option value="postponed" ${project.status === "postponed" ? "selected" : ""}>Postponed</option>
        <option value="done" ${project.status === "done" ? "selected" : ""}>Done</option>
      </select>
    </div>

    <div class="action-row">
      <button id="openOriginalBtn">Open Original In New VS Code Window</button>
      ${project.hasWipCopy ? `<button id="openWipBtn">Open WIP In New VS Code Window</button>` : `<button id="copyToWipBtn">Copy To Work In Progress</button>`}
      ${project.hasWipCopy ? `<button id="sourceToggleBtn">Viewing: ${state.docSource === "original" ? "Original" : "WIP"} (Toggle)</button>` : ""}
    </div>

    <div class="doc-controls">
      <button class="doc-btn" data-doc="todo">TODO</button>
      <button class="doc-btn" data-doc="readme">README</button>
      <button class="doc-btn" data-doc="progress">PROGRESS</button>
      <button class="doc-btn" data-doc="requirements">REQUIREMENTS</button>
      <button class="doc-btn" data-doc="template">TEMPLATE</button>
    </div>

    <div id="docContainer" class="markdown">Loading markdown...</div>
  `;

  document.getElementById("statusSelect").addEventListener("change", (e) => {
    updateStatus(project.id, e.target.value).catch(showError);
  });

  document.getElementById("openOriginalBtn").addEventListener("click", async () => {
    await api(`/api/projects/${encodeURIComponent(project.id)}/open-folder?target=original`, {
      method: "POST",
    });
  });

  const openWipBtn = document.getElementById("openWipBtn");
  if (openWipBtn) {
    openWipBtn.addEventListener("click", async () => {
      await api(`/api/projects/${encodeURIComponent(project.id)}/open-folder?target=wip`, {
        method: "POST",
      });
    });
  }

  const copyBtn = document.getElementById("copyToWipBtn");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => copyToWip(project.id).catch(showError));
  }

  const sourceToggleBtn = document.getElementById("sourceToggleBtn");
  if (sourceToggleBtn) {
    sourceToggleBtn.addEventListener("click", () => {
      state.docSource = state.docSource === "original" ? "wip" : "original";
      renderProjectDetail().catch(showError);
    });
  }

  projectDetailEl.querySelectorAll(".doc-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.docType = btn.dataset.doc;
      renderProjectDetail().catch(showError);
    });
  });

  const doc = await loadDoc(project, state.docType, state.docSource);
  const container = document.getElementById("docContainer");
  if (!doc.exists) {
    container.innerHTML = `<p><strong>${state.docType.toUpperCase()}.md</strong> does not exist for ${state.docSource} source.</p>`;
  } else {
    container.innerHTML = `${doc.html}<hr/><p><small>File: ${escapeHtml(doc.path)}</small></p>`;
  }
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function showError(err) {
  console.error(err);
  alert(`Error: ${err.message}`);
}

async function refresh() {
  const payload = await api("/api/projects");
  state.projects = payload.projects;
}

async function loadSettings() {
  const settings = await api("/api/settings");
  applyTheme(Boolean(settings.darkMode));
  applyFilterState(settings.filters || {});
}

async function persistSettings() {
  const darkMode = themeToggle.dataset.dark === "1";
  try {
    await api("/api/settings", {
      method: "POST",
      body: JSON.stringify({ darkMode, filters: state.filters }),
    });
  } catch (err) {
    console.error(err);
  }
}

function applyTheme(isDark) {
  document.body.classList.toggle("dark", isDark);
  themeToggle.textContent = `Dark Mode: ${isDark ? "On" : "Off"}`;
  themeToggle.dataset.dark = isDark ? "1" : "0";
}

function applyFilterState(filters = {}) {
  state.filters = {
    statuses: Array.isArray(filters.statuses) ? filters.statuses.filter((value) => ["working-on", "postponed", "done", "not-set"].includes(value)) : [],
    categories: Array.isArray(filters.categories) ? filters.categories.filter((value) => ["generated", "python-mini-trials", "ungenerated"].includes(value)) : [],
    search: typeof filters.search === "string" ? filters.search : "",
  };

  searchInput.value = state.filters.search;
  statusCheckboxes.forEach((checkbox) => {
    checkbox.checked = state.filters.statuses.includes(checkbox.value);
  });
  categoryCheckboxes.forEach((checkbox) => {
    checkbox.checked = state.filters.categories.includes(checkbox.value);
  });
  renderProjectList();
}

function syncFiltersFromUi() {
  state.filters.statuses = statusCheckboxes.filter((checkbox) => checkbox.checked).map((checkbox) => checkbox.value);
  state.filters.categories = categoryCheckboxes.filter((checkbox) => checkbox.checked).map((checkbox) => checkbox.value);
  state.filters.search = searchInput.value;
  renderProjectList();
  persistSettings();
}

async function init() {
  await loadSettings();
  await refresh();
  renderSummary();
  renderProjectList();

  themeToggle.addEventListener("click", async () => {
    const currentDark = themeToggle.dataset.dark === "1";
    const nextDark = !currentDark;
    applyTheme(nextDark);
    try {
      await persistSettings();
    } catch (err) {
      applyTheme(currentDark);
      showError(err);
    }
  });

  resetFiltersBtn.addEventListener("click", () => {
    statusCheckboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
    categoryCheckboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
    searchInput.value = "";
    syncFiltersFromUi();
  });

  statusCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", syncFiltersFromUi);
  });

  categoryCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", syncFiltersFromUi);
  });

  searchInput.addEventListener("input", syncFiltersFromUi);
}

init().catch(showError);
