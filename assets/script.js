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

function pickAWord() {
  randomWord = wordBank[randomWordBankIndex];
}

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
    timerEl.textContent = seconds;
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
  winCount.textContent = wins;
}

function loseGame() {
  losses++;
  lossCount.textContent = losses;
}

function renderBlanks() {
  var wordLength = randomWord.length;
  var wordBlanks = '';
  for (let i = 0; i < wordLength; i++) {
    wordBlanks += '_';
  }
  wordToGuess.textContent = wordBlanks;
}

function checkGuessedLetter(event) {
  if (randomWord.includes(event.key)) {
  }
}

startButton.addEventListener('click', startGame);
document.addEventListener('keydown', checkGuessedLetter);
