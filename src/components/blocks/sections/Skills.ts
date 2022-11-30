import { CustomEvents } from "@scripts/util/events";

const data = {
    elements: {
        skillTile: '.s-skilltile'
    },
    action: {
        openSkillTile: '[data-action="openSkillTile"]'
    },
    classes: {
        open: 'open'
    }
} as const;

const Skills = {
    init() {
        document
            .querySelectorAll(data.action.openSkillTile)
            .forEach((skillTileToggle: HTMLElement) => {
                new SkillTile(
                    skillTileToggle.closest(data.elements.skillTile),
                    skillTileToggle
                );
            });
    }
}

class SkillTile {
    tile: HTMLElement;
    toggle: HTMLElement;
    closedHeight: number;
    openHeight: number;

    constructor(skillTile: HTMLElement, toggle: HTMLElement) {
        this.tile = skillTile;
        this.toggle = toggle;
        this.init();
    }

    init() {
        this.tile.addEventListener(CustomEvents.Toggle, this.initHeights.bind(this), { once: true, capture: true });
        this.tile.addEventListener(CustomEvents.Toggle, this.onSkillTileToggle.bind(this));
        this.toggle.addEventListener("click", () => this.tile.dispatchEvent(new Event(CustomEvents.Toggle)));
    }

    initHeights() {
        this.closedHeight = this.tile.offsetHeight;
        this.tile.style.height = `${this.closedHeight}px`;
        this.tile.classList.add(data.classes.open);
        this.openHeight = this.tile.scrollHeight + 2; // include borders
        this.tile.dispatchEvent(new Event(CustomEvents.Toggle));
    }

    onSkillTileToggle() {
        if (this.tile && this.tile.classList.contains(data.classes.open)) {
            this.tile.classList.remove(data.classes.open);
            this.tile.style.height = this.closedHeight
                ? `${this.closedHeight}px`
                : "auto";
        } else {
            this.tile.classList.add(data.classes.open);
            this.tile.style.height = this.openHeight
                ? `${this.openHeight}px`
                : "auto";
        }
    }
}

export default Skills;
