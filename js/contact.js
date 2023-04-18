// navbar
let menu = document.querySelector('#menu-bar')
let navbar = document.querySelector('.navbar')

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle') //mengambil bagian navbar ^^
})

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');
}

// Message us

function validateForm(){
    var name = document.forms["message-form"]["full-name"].value;
    var birthDate = document.forms["message-form"]["birth-date"].value;
    var gender = document.forms["message-form"]["gender"].value;
    var messages = document.forms["message-form"]["messages"].value;

    if(name==""|| birthDate==""||gender==""||messages==""){
        alert("Harus diisi");
        return false;
    }

    document.getElementById("sender-full-name").innerText = name;
    document.getElementById("sender-birth-date").innerText = birthDate;
    document.getElementById("sender-gender").innerText = gender;
    document.getElementById("sender-messages").innerText = messages;
    return false;
}


