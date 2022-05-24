const controler = document.querySelector("#font-size-control")
const text = document.querySelector("#text")

controler.addEventListener("input", onChangeSize)

function onChangeSize() {
    text.style.fontSize = `${Number(controler.value)}px`
}