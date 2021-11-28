/*When I click start quiz the first question loads and the timer begins.

*i am told if the answer is correct, add 5 seconds, display next question

*if incorrect, loose 10 seconds, display next question.

*continue until time runs out or no more questions remain.

*Display score

*score is saved in local storage

*High scores are displayed when button is clicked.

*start button reactivates to start quiz for continued plays */


// Array of questions and choices and correct answers
var questions = [
    {
        question: "First question",
        choices: ["Answer a1", "Answer b1", "Answer c1", "Answer d1"],
        answers: "Correct answer1",
    },
    {
        question: "Second question",
        choices: ["Answer a2", "Answer b2", "Answer c2", "Answer d2"],
        answers: "Correct answer2",
    },
    {
        question: "Third question",
        choices: ["Answer a3", "Answer b3", "Answer c3", "Answer d3"],
        answers: "Correct answer3",
    },
    {
        question: "Fourth question",
        choices: ["Answer a4", "Answer b4", "Answer c4", "Answer d4"],
        answers: "Correct answer4",
    },
    {
        question: "Fifth question",
        choices: ["Answer a5", "Answer b5", "Answer c5", "Answer d5"],
        answers: "Correct answer5"
    },

];

// Variables to call elements

var quizBox = document.querySelector('#quiz-box');
var h2El = document.querySelector('#question-text');
var buttonPress = document.querySelectorAll('.choiceButtons').length;

var questionText = document.querySelector('#question-text');
var answerA = document.querySelector('.answerA');
var answerB = document.querySelector('.answerB');
var answerC = document.querySelector('.answerC');
var answerD = document.querySelector('.answerD');

var correctAnswer = document.querySelector('#correctAnswer');

var startQuiz = document.querySelector('#start-btn');

var highScore = document.querySelector('#high-score');
var timer = document.querySelector('#timer');
var score = document.querySelector('#score');

// Create Quiz elements
var questionIndex = 0;

// Function to beginQuiz
function beginQuiz() {
    startTimer();
    startQuiz.disabled = true;
    questionIndex = 0;


};

// Next question function
var nextQuestion = function () {

}


// Function for button clicks to check correct or incorrect answers

// Function to start timer
function startTimer() {
    var timeLeft = 60;

    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timer.textContent = 'Timer: ' + timeLeft + ' seconds remaining.';
            timeLeft--;
        } else if (timeLeft === 1) {
            timer.textContent = 'Timer: ' + timeLeft + ' second remaining.';
            timeLeft--
        } else {
            timer.textContent = 'Timer:';
            clearInterval(timeInterval);
        }
    }, 1000);
};

startQuiz.addEventListener('click', beginQuiz);
// answerA.addEventListener('click',);
// answerB.addEventListener('click',);
// answerC.addEventListener('click',);
// answerD.addEventListener('click',);
