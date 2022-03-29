const firstName = document.querySelector("#first-name")
const lastName = document.querySelector("#last-name")
const email = document.querySelector("#email")



function logValues() {
  let enteredFirstName = firstName.value
  let enteredLastName = lastName.value
  let enteredEmail = email.value
  console.log(enteredFirstName)
  console.log(enteredLastName)
  console.log(enteredEmail)
}
