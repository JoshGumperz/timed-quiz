// storing all the parts of quiz.html in variables for later use
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
// store all the questions, answers, and correct answer values within the same object, this will make referencing them easier later on
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
// create a clone of object that stores all the questions, answers and variables so that I can edit the clone without changing the original
var availableQuestions = questions.slice();
// set timeLeft to 59 instead of 60 because for some reason it takes an extra second for timer function to load and start counting down
var timeLeft = 59;

function startQuiz() {
    // start the timer
    timer()
    displayQuestion()
    // when user clicks on one of the buttons this function will run
    choicesEl.addEventListener("click", function (event) {
        // check where they clicked
        var element = event.target;
        // since choicesEl is a whole div we want to make sure they actually clicked a button before this code gets executed
        if (element.matches("button")) {
            // if the text content of the button the user clicked matches the text content of correctAnswer from our availableQuestions object, then add 10 to score, and display correctIndicator
            if (element.textContent === availableQuestions[0].correctAnswer) {
                score += 10
                correctIndicator.setAttribute("style", "visibility: initial")
                setTimeout(function () { correctIndicator.setAttribute("style", "visibility: hidden") }, 500)
            }
            // if the text content of the button the user clicked doesn't match the text content of correct Answer, deduct 5 seconds from time, and display incorrect indicator
            else {
                timeLeft -= 5
                incorrectIndicator.setAttribute("style", "visibility: initial")
                setTimeout(function () { incorrectIndicator.setAttribute("style", "visibility: hidden") }, 500)
            }
        }
        // splice out the question that was just displayed from the availableQuestions array, so now the next question will move into index position 0. If there are still questions left in available questions, call displayQuestion function again to display the new question at index position 0
        availableQuestions.splice(0, 1);
        if (availableQuestions.length > 0) {
            displayQuestion()
        }
        // if there are no more available questions, end quiz
        else if (availableQuestions.length <= 0) {
            setTimeout(function () { return endQuiz() }, 500)
        }
    });
}
// sets the timer to count down from 60, and changes the page when timer hits 0
function timer() {
    var timeInterval = setInterval(function () {
        // if timeLeft is greater than 0, subtract 1 from timeLeft every second, display timeLeft so user can see how much time is left
        if (timeLeft > 0) {
            timerEl.textContent = timeLeft;
            timeLeft--;
        }
        // if timeLeft is <= 0 clear the interval so it stops counting down, call end quiz to change the page
        else {
            timerEl.textContent = "0";
            clearInterval(timeInterval);
            endQuiz();
        }
    }, 1000);
}
// display the question and all the options in the appropriate button
function displayQuestion() {
    // questions that have already been asked get spliced out of the array, so we only ever need to display the question and answers at index position 0
    questionEL.textContent = availableQuestions[0].question;
    option1El.textContent = availableQuestions[0].answers[0]
    option2El.textContent = availableQuestions[0].answers[1]
    option3El.textContent = availableQuestions[0].answers[2]
    option4El.textContent = availableQuestions[0].answers[3]
}

// save score to local storage so we can reference it in the high scores page, and then change page to end screen
function endQuiz() {
    localStorage.setItem("Score", JSON.stringify(score))
    return window.location.assign("../html/end-screen.html")
}
startQuiz();

