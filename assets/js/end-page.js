var inputContainer = document.querySelector(".input-field")
var inputEl = document.querySelector("#name-enter")
var submitBtn = document.querySelector("#sumbit-button")
var finalScore = document.querySelector("#final-score")

function displayScore () {
    scoreDisplay = JSON.parse(localStorage.getItem("Score"))
    finalScore.textContent = scoreDisplay
}
displayScore()

