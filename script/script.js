const jobs = [
  { id: 1, companyName: "Mobile First Corp", position: "React Native Developer", location: "Remote", type: "Full-time", salary: "$130k - $175k", description: "Build cross-platform mobile apps.", status: "all" },
  { id: 2, companyName: "WebFlow Agency", position: "Web Designer & Developer", location: "Los Angeles", type: "Part-time", salary: "$80k - $120k", description: "Create stunning web experiences.", status: "all" },
  { id: 3, companyName: "DataViz Solutions", position: "Data Visualization Specialist", location: "Boston", type: "Full-time", salary: "$125k - $165k", description: "Transform complex data.", status: "all" },
  { id: 4, companyName: "CloudFirst Inc", position: "Backend Developer", location: "Seattle", type: "Full-time", salary: "$140k - $190k", description: "Design scalable backend systems.", status: "all" },
  { id: 5, companyName: "Innovation Labs", position: "UI/UX Engineer", location: "Austin", type: "Full-time", salary: "$110k - $150k", description: "Create beautiful interfaces.", status: "all" },
  { id: 6, companyName: "MegaCorp Solutions", position: "JavaScript Developer", location: "New York", type: "Full-time", salary: "$130k - $170k", description: "Build enterprise apps.", status: "all" },
  { id: 7, companyName: "StartupXYZ", position: "Full Stack Engineer", location: "Remote", type: "Full-time", salary: "$120k - $160k", description: "Work on startup platform.", status: "all" },
  { id: 8, companyName: "TechCorp Industries", position: "Senior Frontend Developer", location: "San Francisco", type: "Full-time", salary: "$130k - $175k", description: "Build scalable web apps.", status: "all" }
];


let currentTab = "all"
const jobsContainer = document.getElementById("jobsContainer");
const emptyState = document.getElementById("emptyState");

function getFilteredJobs() {
  if (currentTab === "all") {
    return jobs;
  } else {
    return jobs.filter(j => j.status === currentTab);
  }
}

const total = jobs.length;
const interview = jobs.filter(j => j.status === "interview");
const rejected = jobs.filter(j => j.status === "rejected");


document.getElementById("totalCount").innerText = total;

const filteredCount = getFilteredJobs().length;
document.getElementById("tabCount").innerText =
  `${filteredCount} of ${total} jobs`;


function updateCounts() {
  const total = jobs.length;
  const interview = jobs.filter(j => j.status === "interview").length;
  const rejected = jobs.filter(j => j.status === "rejected").length;

  document.getElementById("totalCount").innerText = total;
  document.getElementById("interviewCount").innerText = interview;
  document.getElementById("rejectedCount").innerText = rejected;

  if (currentTab === "all") {
    document.getElementById("tabCount").innerText = `${total} jobs`;
  } else {
    const filteredCount = getFilteredJobs().length;
    document.getElementById("tabCount").innerText = `${filteredCount} of ${total} jobs`;
  }
}


function createCard(job) {
  const div = document.createElement("div");
  div.className = "bg-white rounded-2xl shadow p-4";

  const statusBadge =
    job.status === "interview"
      ? `<span class="inline-block text-xs font-semibold px-2 py-1 rounded bg-green-100 text-green-700 mb-2">INTERVIEW</span>`
      : job.status === "rejected"
        ? `<span class="inline-block text-xs font-semibold px-2 py-1 rounded bg-red-100 text-red-700 mb-2">REJECTED</span>`
        : `<span class="inline-block text-xs font-semibold px-2 py-1 rounded bg-gray-100 text-gray-600 mb-2">NOT APPLIED</span>`;

  div.innerHTML = `
        <div class="flex justify-between items-start gap-3">
          <div>
            <h3 class="font-semibold text-lg">${job.companyName}</h3>
            <p class="text-sm text-gray-600">${job.position}</p>
            <p class="text-xs text-gray-500 mt-1">${job.location} <i class="fa-solid fa-dot w-1 h-1 bg-gray-200 rounded-full"></i> ${job.type} <i class="fa-solid fa-dot w-1 h-1 bg-gray-200 rounded-full"></i>  ${job.salary}</p>
            <span class="mt-3 block">${statusBadge}</span>
            <p class="text-sm mt-2 text-gray-700">${job.description}</p>
          </div>
          <button class="deleteBtn text-gray-400 hover:text-red-500" data-id="${job.id}"><i class="fa-solid fa-trash"></i></button>
           
        </div>

        <div class="flex flex-wrap gap-2 mt-4">
          <button class="interviewBtn px-3 py-1 rounded-lg border text-green-600 border-green-600" data-id="${job.id}">Interview</button>
          <button class="rejectedBtn px-3 py-1 rounded-lg border text-red-600 border-red-600" data-id="${job.id}">Rejected</button>
        </div>
      `;

  return div;
}

function renderJobs() {
  jobsContainer.innerHTML = "";
  const filtered = getFilteredJobs();

  if (filtered.length === 0) {
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");
    filtered.forEach(job => jobsContainer.appendChild(createCard(job)));
  }

  updateCounts();
}
document.addEventListener("click", (e) => {
  const deleteBtn = e.target.closest(".deleteBtn");
  const interviewBtn = e.target.closest(".interviewBtn");
  const rejectedBtn = e.target.closest(".rejectedBtn");
  const tabBtn = e.target.closest(".tab-btn");

  // Interview toggle
  if (interviewBtn) {
    const id = Number(interviewBtn.dataset.id);
    const job = jobs.find(j => j.id === id);
    if (job) {
      job.status = job.status === "interview" ? "all" : "interview";
      renderJobs();
    }
    return;
  }

  // Rejected toggle
  if (rejectedBtn) {
    const id = Number(rejectedBtn.dataset.id);
    const job = jobs.find(j => j.id === id);
    if (job) {
      job.status = job.status === "rejected" ? "all" : "rejected";
      renderJobs();
    }
    return;
  }

  // Delete
  if (deleteBtn) {
    const id = Number(deleteBtn.dataset.id);
    const index = jobs.findIndex(j => j.id === id);
    if (index !== -1) jobs.splice(index, 1);
    renderJobs();
    return;
  }

  // Tabs
  if (tabBtn) {
    document.querySelectorAll(".tab-btn").forEach(btn => {
      btn.classList.remove("bg-blue-600", "text-white");
      btn.classList.add("bg-gray-200");
    });

    tabBtn.classList.add("bg-blue-600", "text-white");
    tabBtn.classList.remove("bg-gray-200");

    currentTab = tabBtn.dataset.tab;
    renderJobs();
  }
});
renderJobs();