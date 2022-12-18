// Login Page

// Refactor your application so that the user lands on a “Login” page
// The login page should match the style of the application.
// The login page should contain an input for a user to enter their name, and a button to submit.
// After the user clicks the submit button, they should be taken to the main application page, and see a personalized greeting that displays their name and some sort of welcome message.
// The welcome message and name should appear in a logical place of your choosing.

// Global Variables
var currentSaying = [];

// Query Selectors
var radioBox = document.querySelector('.radio-button')
var loginPage = document.querySelector('.login-page');
var mainPage = document.querySelector('.selection-box');
var userName = document.querySelector('.user-name')

// Buttons
var receiveNewBtn = document.querySelector('.receive-new-message');
var loginBtn = document.querySelector('.login-page');
var affirmationsBtn = document.querySelector('#radio1');
var mantrasBtn = document.querySelector('#radio2');

// Event Listeners
window.addEventListener('load', loginView);
receiveNewBtn.addEventListener('click', );
loginBtn.addEventListener('click', );
affirmationsBtn.addEventListener('click', );
mantrasBtn.addEventListener('click', );

// document.addEventListener('DOMContentLoaded', function() {
//     ();
//     ();
//   });
function loginView(event) {
    event.preventdefault();
    mainPage.classList.add('hidden');
    radioBox.classList.add('hidden');
};

function showHome() {
    if (userName.value) {
        userName.innerHTML = `Welcome ${nameInput.value}.  Enjoy the site!`;

    } else {
        alert('Please enter a login name to begin!');
    }
}

