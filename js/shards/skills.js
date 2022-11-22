
export default function Skills() {
    document
    .querySelectorAll('[data-action="openSkillTile"]')
    .forEach((skillTile) => {
        skillTile.addEventListener('click', onSkillTileClick)
    })
}

function onSkillTileClick(event) {
    const skillTile = event.currentTarget.closest('.s-skilltile');
    if (skillTile && skillTile.classList.contains('open')) skillTile.classList.remove('open')
    else skillTile.classList.add('open')
}
