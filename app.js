// Starting state
// Always alocate space for variables like secretNumber before calling them in functions

let generatedNumberList = [];
let randomNumberAmount = 10;
let secretNumber = generateRandomNumber();
let guessAttempts = 0;
console.log(secretNumber);
displayInitialText();

// Major functions

function startNewGame() {
    secretNumber = generateRandomNumber();
    console.log(secretNumber);
    guessAttempts = 0;
    deleteText();
    displayInitialText();
    document.getElementById('chutar').removeAttribute('disabled');
    document.getElementById('reiniciar').setAttribute('disabled', '');
}

function generateRandomNumber() {
    let generatedNumber = parseInt(Math.random() * randomNumberAmount + 1);
    let generatedNumberListLength = generatedNumberList.length;
    if(generatedNumberListLength == randomNumberAmount) {
        generatedNumberList = [];
    }
    if(generatedNumberList.includes(generatedNumber)) {
        return generateRandomNumber();
    } else {
        generatedNumberList.push(generatedNumber);
        return generatedNumber;
    }
}

function verifyGuess() {
    let guessNumber = document.querySelector('input').value;
    guessAttempts++;
    if(guessNumber == secretNumber) {
        let wordAttempt = guessAttempts > 1 ? 'attempts' : 'attempt';
        switchText('h1', 'That\'s it!');
        switchText('p', `You've found the secret number in ${guessAttempts} ${wordAttempt}!`);
        document.getElementById('chutar').setAttribute('disabled', '');
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (guessNumber > secretNumber) {
            switchText('p', `The secret number is lower than ${guessNumber}...`);
        } else {
            switchText('p', `The secret number is higher than ${guessNumber}...`);
        }
        deleteText();
    }
}

// Minor functions

function displayInitialText() {
    switchText('h1', 'SECRET NUMBER GAME');
    switchText('p', 'Choose a number between 1 and 10.');
}

function switchText(elementTag, elementContent) {
    let elementField = document.querySelector(elementTag);
    elementField.innerHTML = elementContent;
}

function deleteText() {
    guessNumber = document.querySelector('input');
    guessNumber.value = '';
}