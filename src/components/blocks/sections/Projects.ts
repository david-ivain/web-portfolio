const data = {
    action: {
        enlargeProjects: '[data-action="enlargeProjects"]'
    },
    elements: {
        projects: '.s-projects'
    },
    classes: {
        enlarged: 'enlarged'
    }
} as const;

const Projects = {
    init() {
        document.querySelector(data.action.enlargeProjects).addEventListener("click", onProjectsEnlarge);
    }
}

function onProjectsEnlarge() {
    document.querySelector(data.action.enlargeProjects).classList.toggle(data.classes.enlarged);
    document.querySelector(data.elements.projects).classList.toggle(data.classes.enlarged);
}

export default Projects;
