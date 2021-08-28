const guessForm = document.getElementById('guess-form');
const guessInput = document.getElementById('guess-input');
const submitInput = document.getElementById('submit-input');
const result = document.getElementById('result');

let randomGuess = Math.floor(Math.random() * 11);
let counter = 4;

function getUserGuess() {
    let userVal = parseInt(guessInput.value);
    if (userVal === randomGuess) {
        createCorrectStr(userVal);
        playAgain();
    } else {
        counter--;
        if (counter === 0) {
            gameOverStr();
            playAgain();
        } else {
            createWrongStr(userVal);
        }
    }
}

guessForm.addEventListener('submit', event => {
    event.preventDefault();
    let userVal = guessInput.value;
    if (userVal !== '') getUserGuess();
    else emptyInput();
});

function createCorrectStr(userVal) {
    result.innerHTML = `${userVal} was the correct number! YOU WIN`;
    result.style.color = '#080';
}

function createWrongStr(userVal) {
    result.innerHTML = `${userVal} is wrong. You have ${counter} guesses left. Try again!`;
    result.style.color = 'orange';
}

function gameOverStr() {
    result.innerHTML = `Game Over. YOU LOSE! The correct number was ${randomGuess}`;
    result.style.color = 'red';
}

function emptyInput() {
    result.innerHTML = `Please enter a number between 1 and 10`;
    result.style.color = 'red';
}

function playAgain() {
    submitInput.value = 'PLAY AGAIN';
    guessInput.setAttribute('disabled', 'true');
    submitInput.addEventListener('click', event => {
        event.preventDefault();
        location.reload();
    })
}