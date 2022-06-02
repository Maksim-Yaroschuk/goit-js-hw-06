const input = document.querySelector("#name-input")
const output = document.querySelector("#name-output")

input.addEventListener("input", (event) => {
    output.textContent = "Anonymous"
    if (event.currentTarget.value) {
    output.textContent = event.currentTarget.value
    }
})