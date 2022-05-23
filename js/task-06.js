const validForm = document.querySelector("#validation-input")

validForm.addEventListener("blur", onValidForm)

function onValidForm() {    
    if (validForm.value.length === Number(validForm.dataset.length)) {
        validForm.classList.remove("invalid")
        validForm.classList.add("valid")
    } else {
        validForm.classList.remove("valid")
        validForm.classList.add("invalid")
    }
}


