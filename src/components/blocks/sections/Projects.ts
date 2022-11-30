export default {
    init() {
        document.querySelector("[data-action=\"enlargeProjects\"]").addEventListener("click", onProjectsEnlarge);
    }
}

function onProjectsEnlarge() {
    document.querySelector("[data-action=\"enlargeProjects\"]").classList.toggle("open");
    document.querySelector(".s-projects").classList.toggle("open");
}
