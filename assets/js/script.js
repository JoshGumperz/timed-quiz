var questionEL = document.querySelector("#question")
var choicesEl = document.querySelector(".choice-container")
var timerEl = document.querySelector("#time-left");
var option1El = document.querySelector("#option-1")
var option2El = document.querySelector("#option-2")
var option3El = document.querySelector("#option-3")
var option4El = document.querySelector("#option-4")
var correctIndicator = document.querySelector("#correct")
var incorrectIndicator = document.querySelector("#incorrect")

var score = 0
var questions = [
    {
        question: "Commonly used data types do NOT include:",
        answers: [
            "strings",
            "booleans",
            "alerts",
            "numbers"
        ],
        correctAnswer: "alerts"
    },
    {
        question: "The condition within an if/else statement is enclosed within ____:",
        answers: [
            "quotes",
            "curly brackets",
            "parentheses",
            "square brackets"
        ],
        correctAnswer: "parentheses"
    },
    {
        question: "Arrays in JavaScript can be used to store:",
        answers: [
            "numbers and strings",
            "other arrays",
            "booleans",
            "all of the above"
        ],
        correctAnswer: "all of the above"
    },
    {
        question: "String values must be stored within ____ when being declared as variables:",
        answers: [
            "commas",
            "quotes",
            "curly brackets",
            "parentheses"
        ],
        correctAnswer: "quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content out to the debugger is:",
        answers: [
            "console.log",
            "terminal/bash",
            "for loops",
            "javascript"
        ],
        correctAnswer: "console.log"
    }
]
var availableQuestions = questions.slice();
var timeLeft = 60;

function startQuiz() {
    timer()
    displayQuestion()
    choicesEl.addEventListener("click", function (event) {
        var element = event.target;
        if (element.matches("button")) {
            if (element.textContent === availableQuestions[0].correctAnswer) {
                score += 10
                correctIndicator.setAttribute("style", "visibility: initial")
                setTimeout(function () { correctIndicator.setAttribute("style", "visibility: hidden") }, 500)
            }
            else {
                timeLeft -= 5
                incorrectIndicator.setAttribute("style", "visibility: initial")
                setTimeout(function () { incorrectIndicator.setAttribute("style", "visibility: hidden") }, 500)
            }
        }
        availableQuestions.splice(0, 1);
        if (availableQuestions.length > 0) {
            displayQuestion()
        }
        else if (availableQuestions.length <= 0) {
            setTimeout(function () { return endQuiz() }, 500)
        }
    });
}
function timer() {
    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timerEl.textContent = timeLeft;
            timeLeft--;
        }
        else {
            timerEl.textContent = "0";
            clearInterval(timeInterval);
            endQuiz();
        }
    }, 1000);
}
function displayQuestion() {
    questionEL.textContent = availableQuestions[0].question;
    option1El.textContent = availableQuestions[0].answers[0]
    option2El.textContent = availableQuestions[0].answers[1]
    option3El.textContent = availableQuestions[0].answers[2]
    option4El.textContent = availableQuestions[0].answers[3]
}

function endQuiz() {
    localStorage.setItem("Score", JSON.stringify(score))
    return window.location.assign("../html/end-screen.html")
}
startQuiz();

