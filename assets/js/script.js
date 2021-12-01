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
var buttonPress = document.querySelectorAll('#choiceButtons');

var questionText = document.querySelector('#question-text');

var showAnswer = document.querySelector('#correctAnswer');

var startQuiz = document.querySelector('#start-btn');

var highScore = document.querySelector('#high-score');
var timer = document.querySelector('#timer');
var score = document.querySelector('#score');

var timeLeft = 60;
var timeInterval;

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

var questionIndex = 0;
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

  getScore();
};

// Function for button clicks to check correct or incorrect answers
function rightWrong(press) {
  if (press.currentTarget.matches('.answerA')) {
    if (
      questions[questionIndex].answers[0] ===
      questions[questionIndex].correctAnswer
    ) {
      timeLeft = timeLeft + 5;
    } else {
      timeLeft = timeLeft - 10;
    }
  } else if (press.currentTarget.matches('.answerB')) {
    if (
      questions[questionIndex].answers[1] ===
      questions[questionIndex].correctAnswer
    ) {
      timeLeft = timeLeft + 5;
    } else {
      timeLeft = timeLeft - 10;
    }
  } else if (press.currentTarget.matches('.answerC')) {
    if (
      questions[questionIndex].answers[2] ===
      questions[questionIndex].correctAnswer
    ) {
      timeLeft = timeLeft + 5;
    } else {
      timeLeft = timeLeft - 10;
    }
  } else if (press.currentTarget.matches('.answerD')) {
    if (
      questions[questionIndex].answers[3] ===
      questions[questionIndex].correctAnswer
    ) {
      timeLeft = timeLeft + 5;
    } else {
      console.log('wrong');
      timeLeft = timeLeft - 10;
    }
  }
  var h2El = document.querySelector('#question-text');
  h2El.remove();
  questionIndex++;
  nextQuestion();
}

// Function for score
function getScore() {
  if (questionIndex === questions.length - 1) {
    clearInterval(timeInterval);
    score.textContent = 'Score: ' + timeLeft;
  }
}
// Function to show correct answer

// Function for end game

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
