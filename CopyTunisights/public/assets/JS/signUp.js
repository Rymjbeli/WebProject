// Retrieve form elements
const userNameInput = document.querySelector(
  '.input-info input[type= "text"][placeholder="User Name"]'
);
const emailInput = document.querySelector(
  '.input-info input[type="text"][placeholder="E-mail Address"]'
);
const passwordInput = document.querySelector(
  '.input-info input[type="password"][placeholder="Enter your password"]'
);
const confirmPasswordInput = document.querySelector(
  '.input-info input[type="password"][placeholder="Confirm your Password"]'
);
const signUpButton = document.querySelector("#signupp");
const form = document.querySelector("form");
const title = document.querySelector(".title");

let userNameExists = false;
let emailExists = true;

// Event listener for userName input
userNameInput.addEventListener("keyup", () => {
  const userName = userNameInput.value.trim();

  // Check if username already exists in database
  // Replace with appropriate database check
  //   const usernameExists = false;

  if (userNameExists && userName.length > 0) {
    userNameInput.nextElementSibling.nextElementSibling.innerText = `"${userName}" already exists`;
  } else if (userName.length == 0) {
    userNameInput.nextElementSibling.nextElementSibling.innerText =
      "Enter a user name";
  } else {
    userNameInput.nextElementSibling.nextElementSibling.innerText = "Valid";
  }
});

// Function to validate email
function validateEmail(email) {
  // Regex pattern for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Event listener for email input
emailInput.addEventListener("input", () => {
  const email = emailInput.value.trim();

  // Check if email is valid and exists
  // Replace with appropriate email validation and existence check
  //   let emailExists = false;

  if (validateEmail(email)) {
    if (emailExists) {
      emailInput.nextElementSibling.nextElementSibling.textContent = "Valid";
    } else {
      emailInput.nextElementSibling.nextElementSibling.textContent =
        "Email does not exist";
      emailExists = false;
    }
  } else {
    emailInput.nextElementSibling.nextElementSibling.textContent =
      "Invalid email";
  }
});

// Function to validate password
function validatePassword(password) {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}

// Set up initial message
let passwordError = "";
const passwordErrorDiv =
  passwordInput.nextElementSibling.nextElementSibling.nextElementSibling;
passwordErrorDiv.innerText = passwordError;
passwordErrorDiv.color = "#3e3516";

passwordInput.addEventListener("keyup", () => {
  const password = passwordInput.value;
  const passwordLength = password.length;

  // Check password strength
  if (!validatePassword(password)) {
    if (passwordLength < 8) {
      passwordError = " Too short ";
      if (
        !/[A-Z]/.test(password) ||
        !/\d/.test(password) ||
        !/[@$!%*?&]/.test(password)
      ) {
        if (/[A-Z]/.test(password)) {
          passwordError += " and missing a number or a special character.";
        } else if (/\d/.test(password)) {
          passwordError +=
            " and missing an uppercase letter or a special character.";
        } else if (/[@$!%*?&]/.test(password)) {
          passwordError += " and missing an uppercase letter or a number.";
        } else {
          passwordError +=
            " and missing an uppercase letter, a number or a special character.";
        }
      }
    } else if (passwordLength >= 8) {
      passwordError = "The password must be alphanumeric.";
      if (
        !/[A-Z]/.test(password) ||
        !/\d/.test(password) ||
        !/[@$!%*?&]/.test(password)
      ) {
        if (/[A-Z]/.test(password)) {
          passwordError = " Missing a number or a special character.";
        } else if (/\d/.test(password)) {
          passwordError =
            " Missing an uppercase letter or a special character.";
        } else if (/[@$!%*?&]/.test(password)) {
          passwordError = " Missing an uppercase letter or a number.";
        }
      }
    }
  } else {
    passwordError = "";
  }
  if (password == "") {
    passwordError = "Password must contain at least 8 alphanumeric characters.";
  }
  // Display password error
  passwordErrorDiv.innerText = passwordError;
});

// Event listener for confirm password input
confirmPasswordInput.addEventListener("keyup", () => {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  // Check if confirm password matches password
  if (password !== confirmPassword) {
    confirmPasswordInput.nextElementSibling.nextElementSibling.nextElementSibling.innerText =
      "Passwords do not match";
  } else {
    confirmPasswordInput.nextElementSibling.nextElementSibling.nextElementSibling.innerText =
      "";
  }
});

function validateSignUpForm() {
  const email = emailInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (
    !userNameExists &&
    validateEmail(email) &&
    emailExists &&
    validatePassword(password) &&
    password === confirmPassword
  ) {
    return true;
  } else {
    displaySignUpMessage1();
    return false;
  }
}

//write a failure message under the title
function displaySignUpMessage1() {
  const erreur = document.createElement("p");
  erreur.textContent = "Please fill out all fields correctly";
  erreur.setAttribute("id", "fail-message");
  title.insertAdjacentElement("afterend", erreur);
}

//write a confirmation message under the title
function displaySignUpMessage() {
  const confirmation = document.createElement("p");
  confirmation.textContent = "You have signed up successfully!";
  confirmation.setAttribute("id", "success-message");
  title.insertAdjacentElement("afterend", confirmation);
}

// Event listener for signUp button
signUpButton.addEventListener("click", (e) => {
  e.preventDefault();
  let ErrorMessage = document.querySelector("#fail-message");
  let ConfirmMessage = document.querySelector("#success-message");
  if (ErrorMessage) {
    ErrorMessage.remove();
  }
  if (ConfirmMessage) {
    ConfirmMessage.remove();
  }
  if (validateSignUpForm()) {
    displaySignUpMessage();
    signUpButton.disabled = true;
    // Replace with appropriate database check
    // const user = {
    //   userName,
    //   email,
    //   password,
    // };

    // // Replace with appropriate database check
    // const users = [];
    // users.push(user);

    // // Replace with appropriate database check
    // localStorage.setItem("users", JSON.stringify(users));
  }
});

// Event listener for the sign-up form
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (validateSignUpForm()) {
    form.submit();
    // Redirect to login page
    // Redirect to index.html after 3 seconds
    setTimeout(() => {
      window.location.href = "index.html";
    }, 2000);
  }
});

form.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    let ErrorMessage = document.querySelector("#fail-message");
    if (ErrorMessage) {
      ErrorMessage.remove();
    }
    if (validateSignUpForm()) {
      displaySignUpMessage();
      //mezel nzidou mtee remember me
      form.submit();
      // Redirect to login page
      // Redirect to index.html after 3 seconds
      setTimeout(() => {
        window.location.href = "index.html";
      }, 2000);
    }
  }
});

function togglePasswordVisibilityNew() {
  // Toggle the password input's type between password and text
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
  // Toggle the show password icon's class between 'fa-eye-slash' and 'fa-eye'
  showPasswordIcon.classList.toggle("uil-eye-slash");
  showPasswordIcon.classList.toggle("uil-eye");
}

function togglePasswordVisibilityConfirm() {
  // Toggle the password input's type between password and text
  confirmPasswordInput.type =
    confirmPasswordInput.type === "password" ? "text" : "password";
  // Toggle the show password icon's class between 'fa-eye-slash' and 'fa-eye'
  showPasswordIcon2.classList.toggle("uil-eye-slash");
  showPasswordIcon2.classList.toggle("uil-eye");
}

// Get the password input and the show password icon elements
var showPasswordIcon = document.querySelector("#show-password i");
// Add event listener to the show password icon
showPasswordIcon.addEventListener("click", togglePasswordVisibilityNew);

// Get the password input and the show password icon elements
var showPasswordIcon2 = document.querySelector("#show-password2 i");
// Add event listener to the show password icon
showPasswordIcon2.addEventListener("click", togglePasswordVisibilityConfirm);
