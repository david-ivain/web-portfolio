import { CustomEvents } from "@scripts/events";

export default {
    init() {
        document
            .querySelectorAll('[data-action="openSkillTile"]')
            .forEach((skillTileToggle: HTMLElement) => {
                new SkillTile(
                    skillTileToggle.closest(".s-skilltile"),
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
        this.tile.classList.add("open");
        this.openHeight = this.tile.scrollHeight + 2; // include borders
        this.tile.dispatchEvent(new Event(CustomEvents.Toggle));
    }

    onSkillTileToggle() {
        if (this.tile && this.tile.classList.contains("open")) {
            this.tile.classList.remove("open");
            this.tile.style.height = this.closedHeight
                ? `${this.closedHeight}px`
                : "auto";
        } else {
            this.tile.classList.add("open");
            this.tile.style.height = this.openHeight
                ? `${this.openHeight}px`
                : "auto";
        }
    }
}
