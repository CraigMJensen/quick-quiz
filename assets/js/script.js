/*When I click start quiz the first question loads and the timer begins.

*after picking first answer move to next question

*i am told if the answer is correct, add 5 seconds, display next question

*if incorrect, loose 10 seconds, display next question.

*continue until time runs out or no more questions remain.

*Display score

*score is saved in local storage

*High scores are displayed when button is clicked.

*start button reactivates to start quiz for continued plays */

// Variables to call elements
var body = document.body;
var quizBox = document.querySelector('#question-div');
var h2El = document.querySelector('#question-text');
var answerBtn1 = document.querySelector('.answerA');
var answerBtn2 = document.querySelector('.answerB');
var answerBtn3 = document.querySelector('.answerC');
var answerBtn4 = document.querySelector('.answerD');

var highScoreList = document.querySelector('#high-scores');

var questionText = document.querySelector('#question-text');

var showAnswer = document.querySelector('#correctAnswer');

var startQuiz = document.querySelector('#start-btn');

var highScore = document.querySelector('#high-score');
var highScoreRemove = document.querySelector('#high-score-remove');
var timer = document.querySelector('#timer');
var score = document.querySelector('#show-score');

var timeLeft = 60;
var timeInterval;

var questionIndex = 0;

// Array of questions and choices and correct answers
var questions = [
  {
    question: 'What does HTML stand for?',
    answers: [
      'Hyper Trainer Markup Language',
      'Hyper Text Marketing Language',
      'Hyper Text Markup Language',
      'Hyper Text Marker Leveler',
    ],
    correctAnswer: 'Hyper Text Markup Language',
  },
  {
    question: 'What symbol identifies an ID?',
    answers: ['*', '#', '&', '!'],
    correctAnswer: '#',
  },
  {
    question: 'Which are loop statements in javaScript?',
    answers: ['7', '42', '88', 'As many as the program calls for'],
    correctAnswer: 'As many as the program calls for',
  },
  {
    question: 'How many objects can an array hold?',
    answers: [
      'for Statement',
      'while Statement',
      'for...in Statement',
      'All of the above',
    ],
    correctAnswer: 'All of the above',
  },
  {
    question: 'Which of these is NOT javascript object?',
    answers: ['Objective', 'Function', 'Boolean', 'Number'],
    correctAnswer: 'Objective',
  },
];

// Function to beginQuiz
function beginQuiz() {
  startTimer();
  startQuiz.disabled = true;
  nextQuestion();
}

// Next question function
var nextQuestion = function () {
  var h2El = document.createElement('h2');
  h2El.setAttribute('id', 'question-text');
  body.appendChild(quizBox);
  quizBox.appendChild(h2El);
  quizBox.appendChild(answerBtn1);
  quizBox.appendChild(answerBtn2);
  quizBox.appendChild(answerBtn3);
  quizBox.appendChild(answerBtn4);

  h2El.textContent = questions[questionIndex].question;
  answerBtn1.textContent = questions[questionIndex].answers[0];
  answerBtn2.textContent = questions[questionIndex].answers[1];
  answerBtn3.textContent = questions[questionIndex].answers[2];
  answerBtn4.textContent = questions[questionIndex].answers[3];
};

// Function for button clicks to check correct or incorrect answers
function rightWrong(event) {
  if (event.currentTarget.matches('.answerA')) {
    if (
      questions[questionIndex].answers[0] ===
      questions[questionIndex].correctAnswer
    ) {
      timeLeft = timeLeft + 5;

      console.log('right');
    } else {
      timeLeft = timeLeft - 10;
      console.log('wrong');
    }
  } else if (event.currentTarget.matches('.answerB')) {
    if (
      questions[questionIndex].answers[1] ===
      questions[questionIndex].correctAnswer
    ) {
      timeLeft = timeLeft + 5;
      console.log('right');
    } else {
      timeLeft = timeLeft - 10;
      console.log('wrong');
    }
  } else if (event.currentTarget.matches('.answerC')) {
    if (
      questions[questionIndex].answers[2] ===
      questions[questionIndex].correctAnswer
    ) {
      timeLeft = timeLeft + 5;
      console.log('right');
    } else {
      timeLeft = timeLeft - 10;
      console.log('wrong');
    }
  } else if (event.currentTarget.matches('.answerD')) {
    if (
      questions[questionIndex].answers[3] ===
      questions[questionIndex].correctAnswer
    ) {
      timeLeft = timeLeft + 5;
      console.log('right');
    } else {
      timeLeft = timeLeft - 10;
      console.log('wrong');
    }
  }
  questionIndex++;
  if (questionIndex < questions.length) {
    var h2El = document.querySelector('#question-text');
    h2El.remove();

    nextQuestion();
  } else {
    clearInterval(timeInterval);
    showAnswers();
    getScore();
  }
}

function showAnswers() {}

// Function for score
function getScore() {
  score.textContent = timeLeft;
  timer.textContent = 'Timer:';

  quizBox.remove();
  saveScore();

  endGame();
}

function saveScore() {
  var highScore = (document.getElementById('show-score').value = timeLeft);
  var savedScores = JSON.parse(localStorage.getItem('score')) || [];
  savedScores.push(highScore);
  localStorage.setItem('score', JSON.stringify(savedScores));
}

// Function for High Scores
function showHighScore() {
  var savedScores = JSON.parse(localStorage.getItem('score'));
  savedScores.sort(function (a, b) {
    return b - a;
  });
  console.log(savedScores);
  var highScoreDiv = document.createElement('div');
  var highScoreOlEl = document.createElement('ol');
  var highScoreLiEl1 = document.createElement('li');
  var highScoreLiEl2 = document.createElement('li');
  var highScoreLiEl3 = document.createElement('li');
  var highScoreLiEl4 = document.createElement('li');
  var highScoreLiEl5 = document.createElement('li');
  highScoreDiv.setAttribute('id', 'high-scores');
  highScoreLiEl1.setAttribute('class', 'high-score-list');
  highScoreLiEl2.setAttribute('class', 'high-score-list');
  highScoreLiEl3.setAttribute('class', 'high-score-list');
  highScoreLiEl4.setAttribute('class', 'high-score-list');
  highScoreLiEl5.setAttribute('class', 'high-score-list');
  highScoreDiv.textContent = 'High Scores';
  highScoreLiEl1.innerHTML = savedScores[0];
  highScoreLiEl2.innerHTML = savedScores[1];
  highScoreLiEl3.innerHTML = savedScores[2];
  highScoreLiEl4.innerHTML = savedScores[3];
  highScoreLiEl5.innerHTML = savedScores[4];
  body.appendChild(highScoreDiv);
  highScoreDiv.appendChild(highScoreOlEl);
  highScoreOlEl.appendChild(highScoreLiEl1);
  highScoreOlEl.appendChild(highScoreLiEl2);
  highScoreOlEl.appendChild(highScoreLiEl3);
  highScoreOlEl.appendChild(highScoreLiEl4);
  highScoreOlEl.appendChild(highScoreLiEl5);
}

function removeHighScoreList() {
  var removeList = document.getElementById('high-scores');
  removeList.remove();
}

// Function for end game
function endGame() {}

// Function to start timer
function startTimer() {
  timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timer.textContent = 'Timer: ' + timeLeft + ' seconds remaining.';
      timeLeft--;
    } else if (timeLeft === 1) {
      timer.textContent = 'Timer: ' + timeLeft + ' second remaining.';
      timeLeft--;
    } else {
      timer.textContent = 'Timer:';
      clearInterval(timeInterval);
    }
  }, 1000);
}

startQuiz.addEventListener('click', beginQuiz);
answerBtn1.addEventListener('click', rightWrong);
answerBtn2.addEventListener('click', rightWrong);
answerBtn3.addEventListener('click', rightWrong);
answerBtn4.addEventListener('click', rightWrong);
highScore.addEventListener('click', showHighScore);
highScoreRemove.addEventListener('click', removeHighScoreList);
