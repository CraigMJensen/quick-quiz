var questions = [{ question: "First question", answerA: "Answer a", answerB: "Answer b", answerC: "Answer c", answerD: "Answer d", correct: "Correct answer" },
{ question: "Second question", answerA: "Answer a", answerB: "Answer b", answerC: "Answer c", answerD: "Answer d", correct: "Correct answer" },
{ question: "Third question", answerA: "Answer a", answerB: "Answer b", answerC: "Answer c", answerD: "Answer d", correct: "Correct answer" },
{ question: "Fourth question", answerA: "Answer a", answerB: "Answer b", answerC: "Answer c", answerD: "Answer d", correct: "Correct answer" },
{ question: "Fifth question", answerA: "Answer a", answerB: "Answer b", answerC: "Answer c", answerD: "Answer d", correct: "Correct answer" }];

var quizBox = document.querySelector('#quiz-box');
var question = document.querySelector('#question');
var answerA = document.querySelector('#answerA');
var answerB = document.querySelector('#answerB');
var answerC = document.querySelector('#answerC');
var answerD = document.querySelector('#answerD');
var correctAnswer = document.querySelector('#correct');
var startQuiz = document.querySelector('#start-btn');
var highScore = document.querySelector('#high-score');
var timer = document.querySelector('#timer');
var score = document.querySelector('#score');

// Function to beginQuiz
var lastQuestion = questions.length - 1;
let currentQuestion = 0;

function displayQuestion() {
    let q = questions[currentQuestion];

    question.innerHTML = '<p>' + q.question + '</p>';

}



startQuiz.addEventListener('click', displayQuestion);



// Function to start timer

/*When I click start quiz the first question appears and the timer begins.

* Start button deactivated

*i am told if the answer is correct, display next question

*if incorrect, loose 10 seconds, display next question.

*continue until time runs out or no more questions remain.

*Display score

*score is saved in local storage

*High scores are displayed when button is clicked.

*start button reactivates to start quiz for continued plays */