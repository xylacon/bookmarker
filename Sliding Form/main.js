const signUpButton = document.getElementById('sign-up');
const signInButton = document.getElementById('sign-in');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => container.classList.add('right-panel-active'))
signInButton.addEventListener('click', () => container.classList.remove('right-panel-active'))