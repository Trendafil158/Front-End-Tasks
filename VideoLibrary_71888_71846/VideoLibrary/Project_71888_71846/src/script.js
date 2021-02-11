const formElement = document.getElementById("registration");
const loginFormElement = document.getElementById("login");

const emailElement = document.querySelector(".input[name=Email]");
const passwordElement = document.querySelector(".input[name=Password]");
const errorElement = document.getElementById("errors");


function validateEmail(email) {
    const minWidthForEmail = email.length > 4;
    const checkIfEmpty = Boolean(email.length);
    const checkForDotSign = email.includes(".");
    const checkForEmailSign = email.includes("@");

    if (checkIfEmpty && checkForEmailSign && checkForDotSign && minWidthForEmail) {
        return true;
    } else {
        errorElement.innerText = "email-адресът е невалиден.";
    }
}


function validatePassword(password)
{
    const minWidthForPassword = password.length > 8;
    const checkForCapitalLetter = /([A-Z])/.test(password);
    const checkForDigit = /([0-9])/.test(password);

    if (minWidthForPassword && checkForCapitalLetter && checkForDigit) {
        return true;
    } else {
        errorElement.innerText = "Слаба парола! Паролата трябва да е поне 8 символа, да има поне една главна буква и поне една цифра.";
    }
}

if (formElement) { // we are on the registraton page
    formElement.addEventListener("submit", event => {
        event.preventDefault();

        const valueForEmail = emailElement.value;
        const valueForPassword = passwordElement.value;

        let checkEmailIsItCorrect = validateEmail(valueForEmail);
        let checkPasswordIsItCorrect = validatePassword(valueForPassword);


        if (checkEmailIsItCorrect && checkPasswordIsItCorrect) {
             alert(`Вашата регистрация беше успешна.`);
        }

    });
} else if (loginFormElement) {
    loginFormElement.addEventListener("submit", event => {
        event.preventDefault();

        const valueForEmail = emailElement.value;
        const valueForPassword = passwordElement.value;

        let checkEmailIsItCorrect = validateEmail(valueForEmail);
        let checkPasswordIsItCorrect = validatePassword(valueForPassword);


        if (checkEmailIsItCorrect && checkPasswordIsItCorrect) {
            alert(`Влизането ви беше успешно.`);
        }

    });
}

var xhr = new XMLHttpRequest();
xhr.onreadystatechange=function(){
    if(this.readyState === 4){
        if(this.status === 200){
            document.getElementById("main-info").innerHTML = this.responseText;
        }
    }
};
xhr.open('GET',"http://www.sap.com/logo.png" , true);
xhr.send();