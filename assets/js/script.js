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

var showAnswerDiv = document.querySelector('#right-wrong-answer');
var showAnswer = document.querySelector('#correctAnswer');

var startQuiz = document.querySelector('#start-btn');

var highScore = document.querySelector('#high-score');
var highScoreRemove = document.querySelector('#high-score-remove');
var timer = document.querySelector('#timer');
var score = document.querySelector('#show-score');
var getName;

var h2El = document.createElement('h2');
var highScoreDiv = document.createElement('div');
var highScoreOlEl = document.createElement('ol');
var highScoreLiEl1 = document.createElement('li');
var highScoreLiEl2 = document.createElement('li');
var highScoreLiEl3 = document.createElement('li');
var rightWrongAnswer = document.createElement('div');
var correctAnswerEl = document.createElement('p');
h2El.setAttribute('id', 'question-text');
highScoreDiv.setAttribute('id', 'high-scores');
highScoreLiEl1.setAttribute('class', 'high-score-list');
highScoreLiEl2.setAttribute('class', 'high-score-list');
highScoreLiEl3.setAttribute('class', 'high-score-list');
rightWrongAnswer.setAttribute('id', 'right-wrong-answer');
correctAnswerEl.setAttribute('id', 'correctAnswer');

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
      rightWrongAnswer.remove();
    } else {
      body.appendChild(rightWrongAnswer);
      rightWrongAnswer.appendChild(correctAnswerEl);
      correctAnswerEl.textContent =
        'Incorrect. The right answer was ' +
        questions[questionIndex].correctAnswer;

      timeLeft = timeLeft - 10;
    }
  } else if (event.currentTarget.matches('.answerB')) {
    if (
      questions[questionIndex].answers[1] ===
      questions[questionIndex].correctAnswer
    ) {
      timeLeft = timeLeft + 5;
      rightWrongAnswer.remove();
    } else {
      rightWrongAnswer.remove();
      body.appendChild(rightWrongAnswer);
      rightWrongAnswer.appendChild(correctAnswerEl);
      correctAnswerEl.textContent =
        'Incorrect. The right answer is ' +
        questions[questionIndex].correctAnswer;

      timeLeft = timeLeft - 10;
    }
  } else if (event.currentTarget.matches('.answerC')) {
    if (
      questions[questionIndex].answers[2] ===
      questions[questionIndex].correctAnswer
    ) {
      timeLeft = timeLeft + 5;
      rightWrongAnswer.remove();
    } else {
      body.appendChild(rightWrongAnswer);
      rightWrongAnswer.appendChild(correctAnswerEl);
      correctAnswerEl.textContent =
        'Incorrect. The right answer is ' +
        questions[questionIndex].correctAnswer;

      timeLeft = timeLeft - 10;
    }
  } else if (event.currentTarget.matches('.answerD')) {
    if (
      questions[questionIndex].answers[3] ===
      questions[questionIndex].correctAnswer
    ) {
      timeLeft = timeLeft + 5;
      rightWrongAnswer.remove();
    } else {
      body.appendChild(rightWrongAnswer);
      rightWrongAnswer.appendChild(correctAnswerEl);
      correctAnswerEl.textContent =
        'Incorrect. The right answer is ' +
        questions[questionIndex].correctAnswer;

      timeLeft = timeLeft - 10;
    }
  }
  questionIndex++;
  if (questionIndex < questions.length) {
    h2El.remove();

    nextQuestion();
  } else {
    clearInterval(timeInterval);
    highScore.disabled = false;

    getScore();
  }
}

// Function for score

function getScore() {
  score.textContent = timeLeft;
  timer.textContent = 'Timer:';

  quizBox.remove();

  saveScore();
}

function saveScore() {
  getName = setInterval(function () {
    var highScore = (document.getElementById('show-score').value = timeLeft);

    var playerName = prompt('Congratulations, Please enter your initials.');
    while (playerName === '') {
      playerName = prompt('You need to enter your Name or Initials');
    }
    var nameScore = { playerName, highScore };
    var savedNameScore = JSON.parse(localStorage.getItem('nameScoreArr')) || [];
    savedNameScore.push(nameScore);
    localStorage.setItem('nameScoreArr', JSON.stringify(savedNameScore));
    clearInterval(getName);
    rightWrongAnswer.remove();
    endGame();
  }, 200);
}

// Function for High Scores
function showHighScore() {
  highScore.disabled = true;

  var savedNameScore = JSON.parse(localStorage.getItem('nameScoreArr'));
  savedNameScore.sort(function (a, b) {
    if (a.highScore === b.highScore) {
      return b.highScore - a.highScore;
    }
    return a.highScore < b.highScore ? 1 : -1;
  });
  console.log(savedNameScore);

  highScoreDiv.textContent = 'High Scores';

  highScoreLiEl1.innerHTML =
    savedNameScore[0].playerName +
    ' is in First Place with ' +
    savedNameScore[0].highScore;

  highScoreLiEl2.innerHTML =
    savedNameScore[1].playerName +
    ' is in Second Place with ' +
    savedNameScore[1].highScore;

  highScoreLiEl3.innerHTML =
    savedNameScore[2].playerName +
    ' is in Third Place with ' +
    savedNameScore[2].highScore;

  body.appendChild(highScoreDiv);
  highScoreDiv.appendChild(highScoreOlEl);
  highScoreOlEl.appendChild(highScoreLiEl1);
  highScoreOlEl.appendChild(highScoreLiEl2);
  highScoreOlEl.appendChild(highScoreLiEl3);
}
removeHighScoreList();
function removeHighScoreList() {
  var removeList = document.getElementById('high-scores');
  removeList.remove();
  highScore.disabled = false;
}

// Function for end game

function endGame() {
  startQuiz.disabled = false;
  questionIndex = 0;
  timeLeft = 60;
  quizBox.textContent = '';
}

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
      endGame();
      alert('You did not finish. Please try again!');
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
