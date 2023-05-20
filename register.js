
//რეგისტრაციის ლოგიკა

let emailField = document.getElementById("email-field");
let emailLabel = document.getElementById("email-label");
let emailError = document.getElementById("email-error");

let passwordField = document.getElementById("password-field");
let passwordLabel = document.getElementById("password-label");
let passwordError = document.getElementById("password-error");

let nameField = document.getElementById("name-field");
let nameLabel = document.getElementById("name-label");
let nameError = document.getElementById("name-error");



function validateEmail (){
    emailLabel.style.bottom ="35px";

    if(!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Please enter a valid email";
        return false; 
    }

    emailError.innerHTML = "";
    return true;

}

function validatePassword (){
    passwordLabel.style.bottom ="35px";

    if(!passwordField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        passwordError.innerHTML = "Enter a secure password: At least 8 characters long, containing uppercase and lowercase letters and numbers.";
        return false; 
    }

    passwordError.innerHTML = "";
    return true;

}

function validateName (){
    nameLabel.style.bottom ="35px";

    if(!nameField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        nameError.innerHTML = "Repeat password";
        return false; 
    }

    nameError.innerHTML = "";
    return true;

}
 