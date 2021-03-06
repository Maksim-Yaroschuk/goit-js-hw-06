function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controls = document.querySelector("#controls")
const amountForm = controls.firstElementChild
const createBtn = controls.querySelector("button")
const resetBtn = controls.lastElementChild
const boxes = document.querySelector("#boxes")

createBtn.addEventListener("click", onGetAmount)
resetBtn.addEventListener("click", destroyBoxes)

function onGetAmount() {
  return createBoxes(amountForm.value)
}

function createBoxes(amount) {
  let w = 20
  let h = 20
  const elementsArr = []
    for (let i = 1; i <= amount; i++) {
    const elements = document.createElement("div")
    elements.style.width = `${w += 10}px`
    elements.style.height = `${h += 10}px`
    elements.style.backgroundColor = getRandomHexColor()
    elementsArr.push(elements)
    }
    boxes.append(...elementsArr)
  }

function destroyBoxes() {
boxes.innerHTML = ""
}





