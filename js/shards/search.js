const storage = {
    projectsAndSkills: [],
    tagList: new Set()
}

export default function Search() {
    storage.projectsAndSkills = Array
        .from(document.querySelectorAll('.s-skills__item, .s-projects__item'))
        .map((item) => {
            const tagsList = Array.from(item.querySelectorAll('[data-tags]'))
            .map((tagHolder) => tagHolder.dataset.tags.toLowerCase().split(' ').filter(Boolean))
            const tags = new Set(tagsList.length ? tagsList.reduce((prev, current) => prev.concat(current)) : tagsList)
            tags.forEach(storage.tagList.add, storage.tagList)
            return {
                element: item,
                tags: tags
            }
        })
    document.querySelector('#tag-list').innerHTML = Array
    .from(storage.tagList)
    .map((tag) => `<option>${tag}</option>`)
    .reduce((prev, current) => prev.concat(current))
    document.querySelector('[data-action="searchSkills"]').addEventListener('submit', onSearchSubmit)
    document.querySelector('[data-action="searchSkills"]').addEventListener('formdata', onSearchFormData)
}

function onSearchSubmit(event) {
    event.preventDefault()
    document.activeElement.blur()
    new FormData(event.currentTarget)
}

function onSearchFormData(event) {
    const formData = event.formData
    const searchCriterias =  formData
        .get('searchString')
        .toLowerCase()
        .replaceAll(/[^A-Za-zÀ-ÖØ-öø-ÿ]+/ig, ' ')
        .split(/ +/)
        .filter(Boolean)
    document.querySelectorAll('[data-tags]').forEach((item) => item.classList.remove('highlight'))
    storage.projectsAndSkills.forEach((item) => {
        if (searchCriterias.length === 0) return item.element.style.display = null
        const searchResults = searchCriterias
        .map((searchCriteria) => item.element.querySelectorAll(`[data-tags*="${searchCriteria}"]`))
        .filter((result) => result.length)

        if (searchResults.length) {
            item.element.style.display = null
            item.element.classList.add('open')
            searchResults.reduce((prev, current) => Array.from(prev).concat(Array.from(current))).forEach((item) => {
                item.classList.add('highlight')
            })
        }
        else item.element.style.display = "none"
    })
    console.log(document.querySelector('.s-skills__item').textContent)
}