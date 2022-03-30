const firstName = document.querySelector("#first-name")
const lastName = document.querySelector("#last-name")
const email = document.querySelector("#email")



function logValues() {
  const enteredFirstName = firstName.value
  const enteredLastName = lastName.value
  const enteredEmail = email.value
  console.log(enteredFirstName)
  console.log(enteredLastName)
  console.log(enteredEmail)
  firstName.value = ""
  lastName.value = ""
  email.value = ""
}
