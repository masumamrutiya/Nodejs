const signupForm = document.querySelector('.sign-up-container');
const loginForm = document.querySelector('.login-container');
const showLoginLink = document.getElementById('show-login');
const showSignupLink = document.getElementById('show-signup');

showLoginLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent anchor's default action
    signupForm.style.left = '-100%';
    loginForm.style.left = '0';
    loginForm.style.opacity = '1';
});

showSignupLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent anchor's default action
    signupForm.style.left = '0';
    loginForm.style.left = '100%';
    loginForm.style.opacity = '0';
});
