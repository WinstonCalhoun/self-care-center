// Login Page

// Refactor your application so that the user lands on a “Login” page
// The login page should match the style of the application.
// The login page should contain an input for a user to enter their name, and a button to submit.
// After the user clicks the submit button, they should be taken to the main application page, and see a personalized greeting that displays their name and some sort of welcome message.
// The welcome message and name should appear in a logical place of your choosing.

// Global Variables
var currentSaying;

// Query Selectors
var radioBox = document.querySelector('.radio-button')
var loginPage = document.querySelector('.login-page');
var mainPage = document.querySelector('.selection-box');
var userName = document.querySelector('.user-name');
var messageType = document.querySelector('.message-type');
var messageBox = document.querySelector('.message-box');
var greeting = document.querySelector('.say-greeting');
var yoaki = document.querySelector('.yoaki');
var displayMessage = document.querySelector('p')

// Buttons
var receiveNewBtn = document.querySelector('.receive-new-message');
var loginBtn = document.querySelector('.login-page-button');
var affirmationsBtn = document.querySelector('#radio1');
var mantrasBtn = document.querySelector('#radio2');

// Event Listeners
receiveNewBtn.addEventListener('click', receiveMessage);
loginBtn.addEventListener('click', showHome);
// affirmationsBtn.addEventListener('click', );
// mantrasBtn.addEventListener('click', );

// document.addEventListener('DOMContentLoaded', function() {
//     ();
//     ();
//   });
// function loginView(event) {
//     event.preventdefault();
// };

function showHome(event) {
    event.preventDefault()
    if (userName.value) {
        greeting.innerHTML = `Welcome ${userName.value}.  Enjoy the site!`;
        messageBox.classList.remove('hidden');
        messageType.classList.remove('hidden');
        mainPage.classList.remove('hidden');
        receiveNewBtn.classList.remove('hidden');
        loginPage.classList.add('hidden');
    } else {
        alert('Please enter a login name to begin!');
    };
};

function receiveMessage(event) {
    event.preventDefault()
    if (affirmationsBtn.checked) {
        currentSaying = affirmations[getRandomIndex(affirmations)]
        console.log('Hello')
    } else if (mantrasBtn.checked) { 
        currentSaying = mantras[getRandomIndex(mantras)]
        console.log(currentSaying)
    };
    yoaki.classList.add('hidden');
    displayMessage.innerText = currentSaying
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

// var affirmations = [
//     'I forgive myself and set myself free.',
//     'I believe I can be all that I want to be.',
//     'I am in the process of becoming the best version of myself.',
//     'I have the freedom & power to create the life I desire.',
//     'I choose to be kind to myself and love myself unconditionally.',
//     'My possibilities are endless.',
//     'I am worthy of my dreams.',
//     'I am enough.',
//     'I deserve to be healthy and feel good.',
//     'I am full of energy and vitality and my mind is calm and peaceful.',
//     'Every day I am getting healthier and stronger.',
//     'I honor my body by trusting the signals that it sends me.',
//     'I manifest perfect health by making smart choices.']
    
//     var mantras = [
//     'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
//     'Don’t let yesterday take up too much of today.',
//     'Every day is a second chance.',
//     'Tell the truth and love everyone.',
//     'I am free from sadness.',
//     'I am enough.',
//     'In the beginning it is you, in the middle it is you and in the end it is you.',
//     'I love myself.',
//     'I am present now.',
//     'Inhale the future, exhale the past.',
//     'This too shall pass.',
//     'Yesterday is not today.',
//     'The only constant is change.',
//     'Onward and upward.',
//     'I am the sky, the rest is weather.']