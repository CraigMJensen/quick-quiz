var questions = [
    {
        question: 'Which will change the text color?',
        answers: {
            a: 'text-decoration',
            b: 'font-family',
            c: 'color',
            d: 'background-color',
        },
        correctAnswer: 'c: color'
    },
    {
        question: '',
        answers: {
            a: '',
            b: '',
            c: '',
            d: '',
        },
        correctAnswer: ''
    },
    {
        question: '',
        answers: {
            a: '',
            b: '',
            c: '',
            d: '',
        },
        correctAnswer: ''
    },
    {
        question: '',
        answers: {
            a: '',
            b: '',
            c: '',
            d: '',
        },
        correctAnswer: ''
    },
    {
        question: '',
        answers: {
            a: '',
            b: '',
            c: '',
            d: '',
        },
        correctAnswer: ''
    },
];
let startQuiz = document.querySelector('.start-btn');

startQuiz.addEventListener('click', generateQuiz => {


})


/*start button changes to next question button.

*When I click start quiz the first question appears and the timer begins.

*once I click an answer I am told if it was correct or not,

*click next question to load next question.

*loop until no more questions remain or time runs out.

*show score (time remaining -5 seconds per wrong answer and +5 seconds per correct answer)

*score is saved in local storage

*start button returns to start quiz for continued plays */