const emailInputField = document.querySelector(
  '.input-info input[type="text"]'
);
const passwordInputField = document.querySelector(
  '.input-info input[type="password"]'
);
const validateButton = document.getElementById("loginn");
const form = document.querySelector("form");
const title = document.querySelector(".title");
const errorMessage = document.createElement("p");
const showPasswordIcon = document.querySelector("#show-password i");
const rememberMeCheckbox = document.querySelector("#logCheck");

errorMessage.setAttribute("id", "error");

function validateEmail(email) {
  // Check if the email is valid using a regular expression
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = regex.test(email);
  return isValid;
}

function displayErrorMessage(message) {
  errorMessage.textContent = message;
  title.insertAdjacentElement("afterend", errorMessage);
}

function removeErrorMessage() {
  if (errorMessage.parentNode) {
    errorMessage.parentNode.removeChild(errorMessage);
  }
}

function showErrors() {
  if (passwordInputField.value === "" || passwordInputField.value.length < 8 || !validateEmail(emailInputField.value)) {
    if (!validateEmail(emailInputField.value)) {
    displayErrorMessage("Please enter a valid email address");
  } else if (passwordInputField.value === "" || passwordInputField.value.length < 8)
      displayErrorMessage("Please write your password");
  } else {
    removeErrorMessage();
  }
}

function validateForm(event) {
  event.preventDefault();
  //   //code to check if the user exists in the database goes here
  //   const userExists = true; // replace with actual code to check user existence

  //   if (userExists) {
  //     console.log("login");
  //     //code to log in the user goes here (redirect to home page)
  //   } else {
  //     displayErrorMessage("Please enter a valid email address and password");
  //   }
}

validateButton.addEventListener("click", showErrors);
form.addEventListener("submit", validateForm);

//allowing to see the password field
function togglePasswordVisibility() {
  // Toggle the password input's type between password and text
  passwordInputField.type =
    passwordInputField.type === "password" ? "text" : "password";
  // Toggle the show password icon's class between 'fa-eye-slash' and 'fa-eye'
  showPasswordIcon.classList.toggle("uil-eye-slash");
  showPasswordIcon.classList.toggle("uil-eye");
}

showPasswordIcon.addEventListener("click", togglePasswordVisibility);

// //remember me functionality
// function rememberLoginCredentials() {
//   const email = emailInputField.value;
//   const password = passwordInputField.value;
//     //code of the saving the login credentials goes here

//   if (rememberMeCheckbox.checked) {
//     localStorage.setItem("email", email);
//     localStorage.setItem("password", password);
//   } else {
//     localStorage.removeItem("email");
//     localStorage.removeItem("password");
//   }
// }

// // add event listener to rememberMeCheckbox
// rememberMeCheckbox.addEventListener('change', rememberLoginCredentials);

// // check if login credentials should be remembered on page load
// if (localStorage.getItem('email') && localStorage.getItem('password')) {
//   const rememberedEmail = localStorage.getItem('email');
//   const rememberedPassword = localStorage.getItem('password');
//   emailInputField.value = rememberedEmail;
//   passwordInputField.value = rememberedPassword;
//   rememberMeCheckbox.checked = true;
// }

