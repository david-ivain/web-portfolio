import { Tags } from "@scripts/data/tags";
import { CustomEvents } from "@scripts/util/events";

interface State {
    projectsAndSkills: { element: HTMLElement; tags: Set<string> }[];
    tagList: Set<string>;
}
const state: State = {
    projectsAndSkills: [],
    tagList: new Set(Object.values(Tags)),
};

const data = {
    elements: {
        projectsAndSkills: '.s-skills__item, .s-projects__item',
        tagHolders: '[data-tags]',
        tagList: '#tag-list'
    },
    action: {
        search: '[data-action="searchSkills"]'
    },
    classes: {
        highlight: 'highlight',
        open: 'open'
    }
} as const;

const ShowcaseSection = {
    init() {
        state.projectsAndSkills = Array.from(
            document.querySelectorAll(data.elements.projectsAndSkills)
        ).map((item) => {
            const tagsList = Array.from(
                item.querySelectorAll(data.elements.tagHolders)
            ).map((tagHolder) =>
                (tagHolder as HTMLElement).dataset.tags
                    .split(" ")
                    .filter(Boolean)
            );
            const tags = new Set(
                tagsList.length
                    ? tagsList.reduce((prev, current) => prev.concat(current))
                    : []
            );
            return {
                element: item as HTMLElement,
                tags: tags,
            };
        });
        document.querySelector(data.elements.tagList).innerHTML = Array.from(
            state.tagList
        )
            .map((tag) => `<option>${tag}</option>`)
            .reduce((prev, current) => prev.concat(current));
        document
            .querySelector(data.action.search)
            .addEventListener("submit", onSearchSubmit);
        document
            .querySelector(data.action.search)
            .addEventListener("formdata", onSearchFormData);
    }
}


function onSearchSubmit(event: SubmitEvent) {
    event.preventDefault();
    (document.activeElement as HTMLElement).blur();
    new FormData(event.currentTarget as HTMLFormElement);
}

function onSearchFormData(event: FormDataEvent) {
    const formData = event.formData;
    const searchCriterias = formData
        .get("searchString")
        .toString()
        //.replaceAll(/[^A-Za-zÀ-ÖØ-öø-ÿ]+/gi, " ")
        .split(/ +/)
        .filter(Boolean);
    document
        .querySelectorAll(data.elements.tagHolders)
        .forEach((item) => item.classList.remove(data.classes.highlight));
    state.projectsAndSkills.forEach((item) => {
        if (searchCriterias.length === 0)
            return (item.element.style.display = null);
        const searchResults: NodeListOf<Element>[] = searchCriterias
            .map((searchCriteria) =>
                item.element.querySelectorAll(
                    `[data-tags*="${searchCriteria}" i]`
                )
            )
            .filter((result) => result.length);

        if (searchResults.length) {
            item.element.style.display = null;
            if (!item.element.classList.contains(data.classes.open))
                item.element.dispatchEvent(new Event(CustomEvents.Toggle));
            searchResults
                .map((item) => Array.from(item))
                .reduce((prev, current) => prev.concat(current))
                .forEach((item) => {
                    item.classList.add(data.classes.highlight);
                });
        } else item.element.style.display = "none";
    });
}

export default ShowcaseSection;
