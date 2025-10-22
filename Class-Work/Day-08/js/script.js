let loginFrom = document.getElementById('loginFrom');
let email = document.getElementById('email');
let password = document.getElementById('password');


loginFrom.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log("Hello World!");
    
    document.querySelector('.email-error').classList.add('d-none');
    document.querySelector('.password-error').classList.add('d-none');

    if (email.value.trim() === '') {
        document.querySelector('.email-error').classList.remove('d-none');
    }
    if (password.value.trim() === '') {
        document.querySelector('.password-error').classList.remove('d-none');
    }


    if (email.value.trim() !== '' && password.value.trim() !== '') {
        confirm(`Account Created Successfully!`);
        e.submit();
        e.reset();
    }    
})