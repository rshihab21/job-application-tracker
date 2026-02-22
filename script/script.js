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
console.log(interview)

const rejected = jobs.filter(j => j.status === "rejected");
console.log(rejected);

document.getElementById("totalCount").innerText = total;

const filteredCount = getFilteredJobs().length;
document.getElementById("tabCount").innerText =
    `${filteredCount} of ${total} jobs`;

//   card generate
