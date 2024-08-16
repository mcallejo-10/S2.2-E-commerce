// Exercise 6
function validate() {
  var error = 0;
  // Get the input fields
  var fName = document.getElementById("fName");
  var fEmail = document.getElementById("fEmail");
  var fAddress = document.getElementById("fAddress");
  var fLastN = document.getElementById("fLastN");
  var fPassword = document.getElementById("fPassword");
  var fPhone = document.getElementById("fPhone");

  // Get the error elements
//   var errorName = document.getElementById("errorName");
//   var errorEmail = document.getElementById("errorEmail");
//   var errorAddress = document.getElementById("errorAddress");
//   var errorLastN = document.getElementById("errorLastN");
//   var errorPassword = document.getElementById("errorPassword");
//   var errorPhone = document.getElementById("errorPhone");

  var minThreeLettersRegex = /^[a-zA-Z]{3,}$/;
  var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  var phoneRegex = /^\d{3,}$/;
  var passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{3,}$/;
  var addressRegex = /^[a-zA-Z0-9._%+-\s]{3,}$/;


  // Validate fields entered by the user: name, phone, password, and email
  if (!minThreeLettersRegex.test(fName.value)) {
    fName.classList.add("is-invalid");
    error++;
  } else {
    fName.classList.remove("is-invalid");
  }

  if (!minThreeLettersRegex.test(fLastN.value)) {
    fLastN.classList.add("is-invalid");
    error++;
  } else {
    fLastN.classList.remove("is-invalid");
  }

  if (!emailRegex.test(fEmail.value)) {
    fEmail.classList.add("is-invalid");
    error++;
  } else {
    fEmail.classList.remove("is-invalid");
  }

  if (!phoneRegex.test(fPhone.value)) {
    fPhone.classList.add("is-invalid");
    error++;
  } else {
    fPhone.classList.remove("is-invalid");
  }

  if (!passwordRegex.test(fPassword.value)) {
    fPassword.classList.add("is-invalid");
    error++;
  } else {
    fPassword.classList.remove("is-invalid");
  }

  if (!addressRegex.test(fAddress.value)) {
    fAddress.classList.add("is-invalid");
    error++;
  } else {
    fAddress.classList.remove("is-invalid");
  }

  if (error > 0) {
    alert("Error");
  } else {
    alert("OK");
  }
}
