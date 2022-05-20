const validForm = document.querySelector("#validation-input")

// console.log(validForm)
// const value = "Max"
// const sybolsLength = value.length

// console.log(sybolsLength)

// validForm.addEventListener("blur", () => {
//     if (validForm.value.length !== validForm.data-length) {
//         validForm.id = "validation-input.invalid"
//     }
// })

validForm.addEventListener("focus", () => {
    validForm.id = "#validation-input.invalid"
})


