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