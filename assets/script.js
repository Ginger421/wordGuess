var winCount = document.querySelector('.win-count');
var lossCount = document.querySelector('.loss-count');
var startButton = document.querySelector('#start-button');
var timerEl = document.querySelector('#timer');
var wordToGuess = document.querySelector('#word-to-guess');

var wordBank = ['superman', 'spiderman', 'thor', 'ant-man'];
var wins = 0;
var losses = 0;
var randomWord = '';
var randomWordBankIndex = Math.floor(Math.random() * wordBank.length);
var isGameWon = false;

//this fnct generates a random word
function pickAWord() {
  randomWord = wordBank[randomWordBankIndex];
  console.log(randomWord)
}

//console.log(word length)
function startGame() {
  pickAWord();
  renderBlanks();
  startTimer();
}

function startTimer() {
  var seconds = 10;
  var timer = setInterval(function () {
    console.log(seconds);
    seconds--;
    timerEl.textContent = `time remaining ${seconds}`;
    if (isGameWon && seconds > 0) {
      winGame();
      clearInterval(timer);
    } else if (seconds === 0) {
      loseGame();
      clearInterval(timer);
    }
  }, 1000);
}

function winGame() {
  wins++;
  winCount.textContent = `wins ${wins}`;
}

function loseGame() {
  losses++;
  lossCount.textContent = `losses ${losses}`;
}

function renderBlanks() {
  var wordLength = randomWord.length;
  var wordBlanks = '';
  for (let i = 0; i < wordLength; i++) {
    wordBlanks += '_ '; 
  }
  wordToGuess.textContent = wordBlanks;
}

function checkGuessedLetter(event) {
  if (randomWord.includes(event.key)) {
    console.log(key)
  }
}

startButton.addEventListener('click', startGame);
document.addEventListener('keydown', checkGuessedLetter);
