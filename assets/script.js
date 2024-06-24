var winCount = document.querySelector('.win-count');
var lossCount = document.querySelector('.loss-count');
var startButton = document.querySelector('#start-button');
var timerEl = document.querySelector('#timer');
var wordToGuess = document.querySelector('#word-to-guess');

var wordBank = ['superman', 'spiderman', 'thor', 'ant-man'];
var wins = 0;
var losses = 0;
//var randomWord = ''; DO i need this
var randomWordBankIndex = Math.floor(Math.random() * wordBank.length);
var isGameWon = false;

//this fnct generates a random word
function pickAWord() {
  randomWord = wordBank[randomWordBankIndex];
  console.log(randomWord)
  console.log(randomWord.length)

  var wordLength = randomWord.length;
  var wordBlanks = '';
  for (let i = 0; i < wordLength.length; i++) {
    wordBlanks += '_ '; 
  }
} //end pickAWord()

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

//have textfrom here in aove
function renderBlanks() {
  var wordLength = randomWord.length;
  var wordBlanks = '';
  for (let i = 0; i < wordLength.length; i++) {
    wordBlanks += '_ '; 
  }
  console.log(wordBlanks)
  wordToGuess.textContent = wordBlanks;
}

function checkGuessedLetter(event) {
  if (randomWord.includes(event.key)) {
    console.log(key)
  }
}

function addLetter() {

} //end addLetter

function winGame() {
  wins++;
  winCount.textContent = `wins ${wins}`;
}

function loseGame() {
  losses++;
  lossCount.textContent = `losses ${losses}`;
}


//localStorage.setItem(key, value);

//localStorage.getItem(key);

startButton.addEventListener('click', startGame);
document.addEventListener('keydown', checkGuessedLetter);

//web apis day 3 2:33  