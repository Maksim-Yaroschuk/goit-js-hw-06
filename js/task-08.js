const loginForm = document.querySelector(".login-form")

loginForm.addEventListener("submit", onSubmitLogin )

function onSubmitLogin(event) {
  event.preventDefault()
  
  const {
        elements: { email, password }
    } = event.currentTarget

      if (email.value === "" || password.value === "") {
    return alert("Всі поля повинні бути заповнені!");
      }
  
  const loginObj = {
    email: email.value,
    password: password.value
  }

  console.log(loginObj)
  event.currentTarget.reset();
}

