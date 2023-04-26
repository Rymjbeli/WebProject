// Get the necessary elements from the HTML
const emailInput = document.querySelector('.input-info input[type="text"]');
const newPasswordInput = document.querySelector(
  '.input-info input[type="password"][placeholder="New Password"]'
);
const confirmNewPasswordInput = document.querySelector(
  '.input-info input[type="password"][placeholder="Confirm Password"]'
);
const validateButton = document.getElementById("change");
const form = document.querySelector("form");
const title = document.querySelector(".title");

// Disable the new password and confirm password inputs initially
newPasswordInput.disabled = true;
confirmNewPasswordInput.disabled = true;

// let mail = false;
let emailIsValid = false;

function validateEmail(email) {
  // Check if the email is valid using a regular expression
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = regex.test(email);
  emailIsValid = isValid;
  return isValid;
}

emailInput.addEventListener("input", () => {
  if (!validateEmail(emailInput.value)) {
    emailInput.setCustomValidity("Please enter a valid email address.");
  } else {
    emailInput.setCustomValidity("");
    removeErrorMessage();
  }
});

validateButton.addEventListener("click", () => {
  if (!validateEmail(emailInput.value)) {
    removeErrorMessage();
    displayErrorMessage("Please enter a valid email address.");
  } else {
    sendConfirmationEmail();
    validateButton.disabled = true;
    // mail=true;
  }
});

function displayConfirmationMessage(message) {
  const confirmationMessage = document.createElement("p");
  confirmationMessage.textContent = message;
  confirmationMessage.setAttribute("id", "save-change");
  title.insertAdjacentElement("afterend", confirmationMessage);
  emailInput.disabled = true;
}

function removeConfirmationMessage() {
  let confirmation = document.querySelector("#save-change");
  if (confirmation) {
    confirmation.remove();
  }
}

function displayErrorMessage(message)  {
  const ErrorMessage = document.createElement("p");
  ErrorMessage.textContent = message;
  ErrorMessage.setAttribute("id", "erreur");
  title.insertAdjacentElement("afterend", ErrorMessage);
}

function removeErrorMessage() {
  let ErrorMessage = document.querySelector("#erreur");
  if (ErrorMessage) {
    ErrorMessage.remove();
  }
}

function sendConfirmationEmail() {
  // Send email to user's email address for confirmation (the email exists in the database or not)
  // Code to send email goes here...

  // Display message indicating that confirmation succeeded
  displayConfirmationMessage("Confirmation succeeded, change your password now");

  // Enable the new password and confirm password inputs
  newPasswordInput.disabled = false;
  confirmNewPasswordInput.disabled = false;

  // Change the text of the validate button to "Save Changes"
  validateButton.textContent = "Save Changes";
  // mail=true;
}

// Function to validate password
function validatePassword(password) {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}


// Set up initial message
let passwordError = "";
const passwordErrorDiv =
  newPasswordInput.nextElementSibling.nextElementSibling.nextElementSibling;
passwordErrorDiv.innerText = passwordError;
passwordErrorDiv.color = "#3e3516";

validateButton.disabled = false;

newPasswordInput.addEventListener("keyup", () => {
  // Get the values of the password and confirm password inputs
  const password = newPasswordInput.value;
  const passwordLength = password.length;

  // Check password strength
  if (!validatePassword(password)) {
    if (passwordLength < 8) {
      newPasswordInput.setCustomValidity(" Too short ");
      passwordError = " Too short ";
      if (
        !/[A-Z]/.test(password) ||
        !/\d/.test(password) ||
        !/[@$!%*?&]/.test(password)
      ) {
        if (/[A-Z]/.test(password)) {
          newPasswordInput.setCustomValidity(" Too short and missing a number or a special character.")
          passwordError +=
            " and missing a number or a special character.";
        } else if (/\d/.test(password)) {
          newPasswordInput.setCustomValidity(" Too short and missing an uppercase letter or a special character.")
          passwordError +=
            " and missing an uppercase letter or a special character.";
        } else if (/[@$!%*?&]/.test(password)) {
          newPasswordInput.setCustomValidity(" Too short and missing an uppercase letter or a number.")
          passwordError +=
            " and missing an uppercase letter or a number.";
        } else {
          newPasswordInput.setCustomValidity(" Too short and missing an uppercase letter, a number or a special character.")
          passwordError +=
            " and missing an uppercase letter, a number or a special character.";
        }
      }
    } else if (passwordLength >= 8) {
      newPasswordInput.setCustomValidity(" The password must be alphanumeric.");
      passwordError = "The password must be alphanumeric.";
      if (
        !/[A-Z]/.test(password) ||
        !/\d/.test(password) ||
        !/[@$!%*?&]/.test(password)
      ) {
        if (/[A-Z]/.test(password)) {
          newPasswordInput.setCustomValidity(" Missing a number or a special character.");
          passwordError = " Missing a number or a special character.";
        } else if (/\d/.test(password)) {
          newPasswordInput.setCustomValidity(" Missing an uppercase letter or a special character.");
          passwordError =
            " Missing an uppercase letter or a special character.";
        } else if (/[@$!%*?&]/.test(password)) {
          newPasswordInput.setCustomValidity(" Missing an uppercase letter or a number.");
          passwordError = " Missing an uppercase letter or a number.";
        }
      }
    }
  } else {
    newPasswordInput.setCustomValidity("");
    passwordError = "";
  }
  if (password == "") {
    newPasswordInput.setCustomValidity("");
    passwordError = "Password must contain at least 8 alphanumeric characters";
  }
  passwordErrorDiv.innerText = passwordError;
});

confirmNewPasswordInput.nextElementSibling.nextElementSibling.nextElementSibling
  .innerText = "";
  
confirmNewPasswordInput.addEventListener("keyup", () => {
  // let passw=false;
  // Get the values of the password and confirm password inputs
  const password = newPasswordInput.value;
  const confirmPassword = confirmNewPasswordInput.value;

  // Check if the password and confirm password inputs match
  if (password !== confirmPassword) {
    // If the passwords don't match, set a custom validation message on the confirm password input
    confirmNewPasswordInput.setCustomValidity("Passwords do not match.");
    confirmNewPasswordInput.nextElementSibling.nextElementSibling.nextElementSibling.innerText = "Passwords do not match.";
  }
  else {
    // If both password checks pass, clear any existing validation messages on the inputs
    confirmNewPasswordInput.setCustomValidity("");
    confirmNewPasswordInput.nextElementSibling.nextElementSibling.nextElementSibling.innerText =
      "Valid";
  }
  if (confirmNewPasswordInput.nextElementSibling.nextElementSibling.nextElementSibling.textContent === "Valid") {
    // passw = true;
  }
});


  // if (mail){
// validateButton.addEventListener("click", (e) => {
//   e.preventDefault();
//     removeConfirmationMessage(); 
//     removeErrorMessage();
//     // if (passw) {
//       removeConfirmationMessage();
//       displayConfirmationMessage("Waiting to apply changes...");
//       form.submit();
//       // If the password validation passes, submit the form
//       // Code to change the password goes here...
//       removeConfirmationMessage();
//       displayConfirmationMessage("Password changed successfully");
//       setTimeout(() => {
//         window.location.href = "login.html";
//       }, 5000);
//     // } else {
//       removeConfirmationMessage();
//       displayErrorMessage("Check your passwords input");
//     // }
// });   
// } 

// Add event listener to the form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();
  removeConfirmationMessage();
  // if (passw) {
    displayConfirmationMessage("Waiting to apply changes...");
    form.submit();
    // If the password validation passes, submit the form
    // Code to change the password goes here...
    displayConfirmationMessage("Password changed successfully");
    setTimeout(() => {
      window.location.href = "login.html";
    }, 5000);
  // } else {
    displayErrorMessage("Check your passwords input");
  // }
});


function togglePasswordVisibilityNew() {
  // Check if the password input is enabled
  if (!newPasswordInput.disabled) {
    // Toggle the password input's type between password and text
    newPasswordInput.type =
      newPasswordInput.type === "password" ? "text" : "password";
    // Toggle the show password icon's class between 'fa-eye-slash' and 'fa-eye'
    showPasswordIcon.classList.toggle("uil-eye-slash");
    showPasswordIcon.classList.toggle("uil-eye");
  }
}

function togglePasswordVisibilityConfirm() {
  // Check if the password input is enabled
  if (!confirmNewPasswordInput.disabled) {
    // Toggle the password input's type between password and text
    confirmNewPasswordInput.type =
      confirmNewPasswordInput.type === "password" ? "text" : "password";
    // Toggle the show password icon's class between 'fa-eye-slash' and 'fa-eye'
    showPasswordIcon2.classList.toggle("uil-eye-slash");
    showPasswordIcon2.classList.toggle("uil-eye");
  }
}

// Get the password input and the show password icon elements
var showPasswordIcon = document.querySelector("#show-password i");
// Add event listener to the show password icon
showPasswordIcon.addEventListener("click", togglePasswordVisibilityNew);

// Get the password input and the show password icon elements
var showPasswordIcon2 = document.querySelector("#show-password2 i");
// Add event listener to the show password icon
showPasswordIcon2.addEventListener("click", togglePasswordVisibilityConfirm);
