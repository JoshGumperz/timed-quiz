var inputContainer = document.querySelector(".input-field")
var inputEl = document.querySelector("#name-enter")
var submitBtn = document.querySelector("#sumbit-button")
var finalScore = document.querySelector("#final-score")

// had to impliment a function to sumbit when "Enter" key is pressed manually, cause using a form in html was causing an error.
inputContainer.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
      saveScore()
      changePage()
  }
})

submitBtn.addEventListener("click", function (event) {
  saveScore()
  changePage()
});

function displayScore () {
  scoreDisplay = JSON.parse(localStorage.getItem("Score"))
  finalScore.textContent = scoreDisplay
}

function saveScore() {
  var userInitials = inputEl.value.trim();
  if (userInitials === "") {
    return changePage()
  }
  storedInitials = localStorage.setItem("Initials", JSON.stringify(userInitials))
}

function changePage() {
  return window.location.assign("../html/high-scores.html")
}

displayScore() 