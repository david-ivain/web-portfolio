const html = document.body.parentElement

export default function ViewportHelper() {
    writeAspectRatio()
    window.addEventListener('resize', writeAspectRatio)
}

function writeAspectRatio() {
    html.style.setProperty('--aspect-ratio', (window.innerWidth / window.innerHeight).toString())
    html.style.setProperty('--viewport-height', window.innerHeight.toString())
}