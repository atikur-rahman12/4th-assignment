let currentTab = "all";
const tabActive = ["bg-blue-600", "border-blue-600", "text-white"];
const tabInactive = ["bg-transparent", "text-slate-700", 'border-slate-200', "text-black"];

const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectContainer = document.getElementById("reject-container");
const emptyState = document.getElementById("empty-state");

function switchTab(tab) {
    const tabs = ["all", "interviewed", "rejected"];
    currentTab = tab;

    for(const t of tabs) {
        const tabName = document.getElementById("tab-" + t);
        if (t === tab) {
            tabName.classList.remove( ... tabInactive);
            tabName.classList.add( ... tabActive);
        }
        else{
            tabName.classList.remove(... tabActive);
            tabName.classList.add(... tabInactive);
        }
    }

    const pages = [allContainer, interviewContainer, rejectContainer];

    for (const section of pages) {
        section.classList.add("hidden");
    }

    emptyState.classList.add("hidden");

    if(tab === "all") {
        allContainer.classList.remove("hidden");
        if(allContainer.children.length < 1) {
            emptyState.classList.remove("hidden");
        }
    }
    else if (tab === "interviewed") {
        interviewContainer.classList.remove("hidden");
        if(interviewContainer.children.length < 1) {
            emptyState.classList.remove("hidden");
        }
    }
    else{
        rejectContainer.classList.remove("hidden");
        if(rejectContainer.children.length < 1) {
            emptyState.classList.remove("hidden");
        }
    }
    updateState();
}

// state updates
const totalJobs = document.getElementById("total-jobs");
const interviewedJobs = document.getElementById("interviewed-jobs");
const rejectedJobs = document.getElementById("rejected-jobs");
const availableJobs = document.getElementById("available");

totalJobs.innerText = allContainer.children.length;

switchTab(currentTab);

document.getElementById("jobs-container").addEventListener("click", function(event){
    const clickedElement = event.target;
    const card = clickedElement.closest(".card");
    const parent = card.parentNode;
    const status = card.querySelector(".status");

    if(clickedElement.classList.contains("interview-btn")){
        status.innerText = "INTERVIEWED";
        interviewContainer.appendChild(card);
        updateState();
    }
    if(clickedElement.classList.contains("reject-btn")){
        status.innerText = "REJECTED";
        rejectContainer.appendChild(card);
        updateState();
    }
    if(clickedElement.classList.contains("delete-btn")){
        parent.removeChild(card);
        updateState();
    }
})

function updateState() {
    const counts = {
        all: allContainer.children.length,
        interviewed: interviewContainer.children.length,
        rejected: rejectContainer.children.length,
    };

    totalJobs.innerText = counts.all;
    interviewedJobs.innerText = counts.interviewed;
    rejectedJobs.innerText = counts.rejected;

    availableJobs.innerText = counts[currentTab];

    if(counts[currentTab] < 1) {
        emptyState.classList.remove("hidden");
    }
    else{
        emptyState.classList.add("hidden");
    }
}

updateState();