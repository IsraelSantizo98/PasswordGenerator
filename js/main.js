const info = document.querySelector(".info");
const passfield = document.querySelector("#password");
let password = "";
function generatePassword() {
    password = "";
    let length = 12;
    let chars = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%^&*()`;
    let n = chars.length;
    for (var i = 0; i < length; ++i){
        password += chars.charAt(Math.floor(Math.random() * n));
    }
    passfield.value = password;
}
function copytext(){
    navigator.clipboard.writeText(password);
    info.style.display = "block";
    setTimeout(function(){ info.style.display = "none"; }, 1500);
}