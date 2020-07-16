console.warn('Project 4');

let name = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let validName = false;
let validEmail = false;
let validPhone = false;

name.addEventListener('input', function () {
    let reg = /^[a-zA-Z]([ a-zA-Z]){2,20}$/;
    let str = name.value;
    if (reg.test(str)) {
        name.style.borderColor = 'green';
        name.style.borderWidth = '3px';
        validName = true;
    }
    else {
        name.style.borderColor = 'red';
        name.style.borderWidth = '3px';
        validName = false;
    }
})

email.addEventListener('input', function () {
    let reg = /^([_\-\.a-zA-Z0-9]+)@([a-z]+)\.([a-z]){2,7}$/;
    let str = email.value;
    if (reg.test(str)) {
        email.style.borderColor = 'green';
        email.style.borderWidth = '3px';
        validEmail = true;
    }
    else {
        email.style.borderColor = 'red';
        email.style.borderWidth = '3px';
        validEmail = false;
    }
})

phone.addEventListener('input', function () {
    let reg = /^([0-9]){10}$/;
    let str = phone.value;
    if (reg.test(str)) {
        phone.style.borderColor = 'green';
        phone.style.borderWidth = '3px';
        validPhone = true;
    }
    else {
        phone.style.borderColor = 'red';
        phone.style.borderWidth = '3px';
        validPhone = false;
    }
})

let message = document.getElementById('success');
subMess = document.getElementById('subMess');
let btnSubmit = document.getElementById('submit');
btnSubmit.addEventListener('click', function(e){
    e.preventDefault();
    if(validEmail && validName && validPhone){
        message.classList.add('show');
        subMess.innerHTML = `<h3>Your form is submitted Sucessfully...</h3>`;
    }
    else{        
        message.classList.remove('show');
        subMess.innerHTML = `<h3>Your form is not submitted...Try Again with valid credentials</h3>`;
    }
})