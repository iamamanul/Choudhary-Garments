// document.getElementById('signInBtn').addEventListener('click', function() {
//     document.getElementById('signInForm').classList.add('active');
//     document.getElementById('signUpForm').classList.remove('active');
//     this.classList.add('active');
//     document.getElementById('signUpBtn').classList.remove('active');
// });

// document.getElementById('signUpBtn').addEventListener('click', function() {
//     document.getElementById('signUpForm').classList.add('active');
//     document.getElementById('signInForm').classList.remove('active');
//     this.classList.add('active');
//     document.getElementById('signInBtn').classList.remove('active');
// });


document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});
