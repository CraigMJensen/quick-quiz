/*When I click start quiz the first question appears and the timer begins.

*i am told if the answer is correct, add 5 seconds, display next question

*if incorrect, loose 10 seconds, display next question.

*continue until time runs out or no more questions remain.

*Display score

*score is saved in local storage

*High scores are displayed when button is clicked.

*start button reactivates to start quiz for continued plays */


// Array of questions and choices
// Array of correct answers
var questions = [{
    question: "First question",
    choices: ["Answer a1", "Answer b1", "Answer c1", "Answer d1"],
    correct: "Correct answer1"
},

{
    question: "Second question",
    choices: ["Answer a1", "Answer b1", "Answer c1", "Answer d1"],
    correct: "Correct answer2"
},

{
    question: "Third question",
    choices: ["Answer a1", "Answer b1", "Answer c1", "Answer d1"],
    correct: "Correct answer3"
},

{
    question: "Fourth question",
    choices: ["Answer a1", "Answer b1", "Answer c1", "Answer d1"],
    correct: "Correct answer4"
},

{
    question: "Fifth question",
    choices: ["Answer a1", "Answer b1", "Answer c1", "Answer d1"],
    correct: "Correct answer5"
}];


// Variables to call elements
var body = document.body;
var container = document.getElementsByClassName('.container');
var quizBox = document.querySelector('#quiz-box');
var question = document.querySelector('#question');
var buttonPress = document.querySelectorAll('.choiceButtons').length;
var correctAnswer = document.querySelector('#correctAnswer');
var startQuiz = document.querySelector('#start-btn');
var highScore = document.querySelector('#high-score');
var timer = document.querySelector('#timer');
var score = document.querySelector('#score');
var quizText = quizBox.innerHTML;

let currentQuestion = 0;

let q = questions[currentQuestion];


// Function to beginQuiz
function beginQuiz() {
    startTimer();
    startQuiz.disabled = true;

    for (var i = 0; i < questions.length; i++) {


    }




};

for (var i = 0; i < buttonPress; i++) {
    document.querySelectorAll(".choiceButtons")[i].addEventListener('click', function () {

    })
};


// for (var i = 0; i < questions.length; i++) {

// }

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
}

startQuiz.addEventListener('click', beginQuiz);
