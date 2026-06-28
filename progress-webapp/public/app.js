const state = {
  projects: [],
  selectedId: null,
  filter: "all",
  search: "",
  docType: "todo",
  docSource: "original",
};

const projectListEl = document.getElementById("projectList");
const projectDetailEl = document.getElementById("projectDetail");
const filterSelect = document.getElementById("filterSelect");
const searchInput = document.getElementById("searchInput");
const summaryEl = document.getElementById("summary");
const themeToggle = document.getElementById("themeToggle");

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
  return state.projects.filter((p) => {
    const q = state.search.trim().toLowerCase();
    const matchesSearch = !q || p.folderName.toLowerCase().includes(q) || String(p.number).includes(q);
    if (!matchesSearch) return false;

    if (state.filter === "all") return true;
    return p.status === state.filter;
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
  const wip = state.projects.filter((p) => p.hasWipCopy).length;
  const working = state.projects.filter((p) => p.status === "working-on").length;
  summaryEl.innerHTML = `
    <div>Total: <strong>${total}</strong></div>
    <div>Generated: <strong>${generated}</strong></div>
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
            <span class="badge ${p.isGenerated ? "generated" : ""}">${p.isGenerated ? "Generated" : "Ungenerated"}</span>
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
      <a href="${project.vscodeOriginalLink}" target="_blank" rel="noopener noreferrer"><button>Open Original In VS Code</button></a>
      ${project.hasWipCopy ? `<a href="${project.vscodeWipLink}" target="_blank" rel="noopener noreferrer"><button>Open WIP In VS Code</button></a>` : `<button id="copyToWipBtn">Copy To Work In Progress</button>`}
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
}

async function saveSettings(darkMode) {
  await api("/api/settings", {
    method: "POST",
    body: JSON.stringify({ darkMode }),
  });
}

function applyTheme(isDark) {
  document.body.classList.toggle("dark", isDark);
  themeToggle.textContent = `Dark Mode: ${isDark ? "On" : "Off"}`;
  themeToggle.dataset.dark = isDark ? "1" : "0";
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
      await saveSettings(nextDark);
    } catch (err) {
      applyTheme(currentDark);
      showError(err);
    }
  });

  filterSelect.addEventListener("change", () => {
    state.filter = filterSelect.value;
    renderProjectList();
  });

  searchInput.addEventListener("input", () => {
    state.search = searchInput.value;
    renderProjectList();
  });
}

init().catch(showError);
