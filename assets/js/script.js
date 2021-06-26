var questionEL = document.querySelector("#question")
var choicesEl = document.querySelector(".choices")
var timerEl = document.querySelector("#time-left");

var score = 0
var userAnswer
var questions = ["Commonly used data types do NOT include:", "The condition within an if/else statement is enclosed within ____:", "Arrays in JavaScript can be used to store:", "String values must be stored within ____ when being declared as variables:", "A very useful tool used during development and debugging for printing content out to the debugger is:"]
var answers = {
    question1Answers: [
        "strings",
        "booleans",
        "alerts",
        "numbers"
    ],
    question2Answers: [
        "quotes",
        "curly brackets",
        "parentheses",
        "square brackets"
    ],
    question3Answers: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above"
    ],
    question4Answers: [
        "commas",
        "quotes",
        "curly brackets",
        "parentheses"
    ],
    question5Answers: [
        "console.log",
        "termina/bash",
        "for loops",
        "javascript"
    ],
}
var correctAnsers = [answers.question1Answers[2], answers.question2Answers[2], answers.question3Answers[3], answers.question4Answers[1], answers.question5Answers[0]]