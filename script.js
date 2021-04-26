const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

//show error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.classList = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}
// show success
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.classList = "form-control success";
}
// email validation
function checkEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(email.value.trim())){
       showSuccess(email)
  }
  else{
      showError(email,`${showFieldName(email.id)} is not valid`)

  }
}

// is required
function isRequired(inputArr) {
  inputArr.forEach((item) => {
    if (item.value === "") {
      showError(item, `${showFieldName(item.id)} is required`);
    } else {
      showSuccess(item);
    }
  });
}
// showFieldName
function showFieldName(input) {
  return input.toUpperCase().charAt(0) + input.slice(1);
}
// check length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${showFieldName(input.id)} most be more  than ${min} character `);
  } else if (input.value.length > max) {
    showError(input, `${showFieldName(input.id)} most be less  than ${max} character `);
  } else {
    showSuccess(input);
  }
}
// check passwords match
function checkPasswordsMatch(password1,password2){
    if(password1.value!==password2.value){
        showError(password2,"passwords do not match")
    }
}

// add event listener

form.addEventListener("submit", function (e) {
  e.preventDefault();
  isRequired([username, email, password, confirmPassword]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email)
  checkPasswordsMatch(password,confirmPassword)
});
