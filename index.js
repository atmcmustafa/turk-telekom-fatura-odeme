
const mobileBtn = document.getElementById("mobileBtn");
const phoneBtn = document.getElementById("phoneBtn");
const numberInput = document.getElementById("numberInput");
const numberPassword = document.getElementById("numberPassword");
const loginBtn = document.getElementById("loginBtn");

phoneBtn.addEventListener("click", () => { 
    phoneBtn.style.borderLeft = "4px solid #049EAD"
    mobileBtn.style.borderLeft = "1px solid #E2E8F0"
    numberInput.placeholder = "T.C / Yabancı Kimlik Numarası"
    numberPassword.placeholder = "Cep Telefon Numarası"
    numberPassword.type = "text"


})

mobileBtn.addEventListener("click", () => { 
    mobileBtn.style.borderLeft = "4px solid #049EAD"
    phoneBtn.style.borderLeft = "1px solid #E2E8F0"

    numberInput.placeholder = "Cep Telefon Numarası"
    numberPassword.placeholder = "'Şifre' yaz 9520'ye mesaj gönder"
})

function onlyNumberKey(evt) {
    let ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}

function checkInput (){
    const inputValue = numberInput.value;
    const passwordValue = numberPassword.value;

    if(inputValue.length > 11 && passwordValue.length >5) {
        loginBtn.classList.remove('disabled');
        loginBtn.classList.add('active-btn');
    }
    else {
        loginBtn.classList.remove('active-btn');
        loginBtn.classList.add('disabled');
    }
}

numberInput.addEventListener("input", checkInput)
numberPassword.addEventListener("input", checkInput)




