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

    const filteredCount = getFilteredJobs().length;
    document.getElementById("tabCount").textContent = `${filteredCount} of ${total} jobs`;
}


function createCard(job) {
    const div = document.createElement("div");
    div.className = "bg-white rounded-2xl shadow p-4";

    div.innerHTML = `
        <div class="flex justify-between items-start gap-3">
          <div>
            <h3 class="font-semibold text-lg">${job.companyName}</h3>
            <p class="text-sm text-gray-600">${job.position}</p>
            <p class="text-xs text-gray-500 mt-1">${job.location} • ${job.type} • ${job.salary}</p>
            <p class="text-sm mt-2 text-gray-700">${job.description}</p>
          </div>
          <button class="deleteBtn text-gray-400 hover:text-red-500" data-id="${job.id}"><i class="fa-solid fa-trash cursor-pointer"></i></button>
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
    const id = Number(e.target.dataset.id);
    const job = jobs.find(j => j.id === id);

    if (e.target.classList.contains("interviewBtn") && job) {
        job.status = job.status === "interview" ? "all" : "interview";
        renderJobs();
    }

    if (e.target.classList.contains("rejectedBtn") && job) {
        job.status = job.status === "rejected" ? "all" : "rejected";
        renderJobs();
    }

    if (e.target.classList.contains("deleteBtn") && job) {
        const index = jobs.findIndex(j => j.id === id);
        if (index !== -1) jobs.splice(index, 1);
        renderJobs();
    }

    if (e.target.classList.contains("tab-btn")) {
        document.querySelectorAll(".tab-btn").forEach(btn => {
            btn.classList.remove("bg-blue-600", "text-white");
            btn.classList.add("bg-gray-200");
        });

        e.target.classList.add("bg-blue-600", "text-white");
        e.target.classList.remove("bg-gray-200");

        currentTab = e.target.dataset.tab;
        renderJobs();
    }
});
renderJobs();