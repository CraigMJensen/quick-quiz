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
var answerA = document.querySelector('.answerA');
var answerB = document.querySelector('.answerB');
var answerC = document.querySelector('.answerC');
var answerD = document.querySelector('.answerD');

var showAnswer = document.querySelector('#correctAnswer');

var startQuiz = document.querySelector('#start-btn');

var highScore = document.querySelector('#high-score');
var timer = document.querySelector('#timer');
var score = document.querySelector('#score');


// Array of questions and choices and correct answers
var question1 = "What does HTML stand for?";
var question2 = "What symbol identifies an ID?";
var question3 = "Which are loop statements in javaScript?";
var question4 = "How many objects can an array hold?";
var question5 = "Which of these is NOT javascript object?";
var questionsArray = [question1, question2, question3, question4, question5];

var choices1 = {
    answers1: "Hyper Trainer Markup Language",
    answers2: "Hyper Text Marketing Language",
    answers3: "Hyper Text Markup Language",
    answers4: "Hyper Text Marker Leveler"
};
var choices2 = {
    answers1: "*",
    answers2: "#",
    answers3: "&",
    answers4: "!"
};
var choices3 = {
    answers1: "for Statement",
    answers2: "while Statement",
    answers3: "for...in Statement",
    answers4: "All of the above"
};
var choices4 = {
    answers1: "7",
    answers2: "42",
    answers3: "88",
    answers4: "As many as the program calls for"
};
var choices5 = {
    answers1: "Objective",
    answers2: "Function",
    answers3: "Boolean",
    answers4: "Number"
};
var choicesArray = [choices1, choices2, choices3, choices4, choices5];

var correctAnswer1 = choices1.answers3;
var correctAnswer2 = choices2.answers2;
var correctAnswer3 = choices3.answers4;
var correctAnswer4 = choices4.answers4;
var correctAnswer5 = choices5.answers1;
var correctAnswersArray = [correctAnswer1, correctAnswer2, correctAnswer3, correctAnswer4, correctAnswer5];
var clickedAnswers = correctAnswersArray[questionIndex];

// Create Quiz elements

var questionIndex = 0;
// Function to beginQuiz
function beginQuiz() {
    startTimer();
    startQuiz.disabled = true;
    nextQuestion();



};

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

    h2El.textContent = questionsArray[questionIndex];
    answerBtn1.textContent = (choicesArray[questionIndex].answers1);
    answerBtn2.textContent = (choicesArray[questionIndex].answers2);
    answerBtn3.textContent = (choicesArray[questionIndex].answers3);
    answerBtn4.textContent = (choicesArray[questionIndex].answers4);
}


// Function for button clicks to check correct or incorrect answers
function rightWrong(event) {

    if (event.target.matches("#choiceButtons")) {
        var h2El = document.querySelector('#question-text');
        h2El.remove();






        questionIndex++;
        nextQuestion();
    }
}
// Checking to see if all buttons log
answerBtn1.addEventListener("click", () => {
    console.log("clicked A");
})
answerBtn2.addEventListener("click", () => {
    console.log("clicked B");
})
answerBtn3.addEventListener("click", () => {
    console.log("clicked C");
})
answerBtn4.addEventListener("click", () => {
    console.log("clicked D");
})
// Function for score

// Function to show correct answer

// Function for end game

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
answerA.addEventListener('click', rightWrong);
answerB.addEventListener('click', rightWrong);
answerC.addEventListener('click', rightWrong);
answerD.addEventListener('click', rightWrong);

