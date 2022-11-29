import { CustomEvents } from "@scripts/events";

function init() {
    document
        .querySelectorAll('[data-action="openSkillTile"]')
        .forEach((skillTileToggle: HTMLElement) => {
            new SkillTile(
                skillTileToggle.closest(".s-skilltile"),
                skillTileToggle
            );
        });
}

class SkillTile {
    skillTile: HTMLElement;
    toggle: HTMLElement;
    closedHeight: number = 0;
    openHeight: number = 0;

    constructor(skillTile: HTMLElement, toggle: HTMLElement) {
        this.skillTile = skillTile;
        this.toggle = toggle;
        this.init();
    }

    init() {
        this.toggle.addEventListener("click", () =>
            onSkillTileClick(
                this.skillTile,
                this.closedHeight,
                this.openHeight
            )
        );
        this.skillTile.addEventListener(CustomEvents.Toggle, () =>
            onSkillTileClick(
                this.skillTile,
                this.closedHeight,
                this.openHeight
            )
        );
        this.closedHeight = this.skillTile.scrollHeight;
        this.skillTile.classList.add("open");
        this.openHeight = this.skillTile.scrollHeight;
        this.skillTile.classList.remove("open");
        this.skillTile.style.height = `${this.closedHeight}px`;
    }
}
function onSkillTileClick(
    skillTile: HTMLElement,
    closedHeight: number,
    openHeight: number
) {
    if (skillTile && skillTile.classList.contains("open")) {
        skillTile.classList.remove("open");
        skillTile.style.height = closedHeight
            ? `${closedHeight}px`
            : "auto";
    } else {
        skillTile.classList.add("open");
        skillTile.style.height = openHeight ? `${openHeight}px` : "auto";
    }
}

init();