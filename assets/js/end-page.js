// grab all the elements from end-page.html I want to change/use, store them in variables
var inputContainer = document.querySelector(".input-field")
var inputEl = document.querySelector("#name-enter")
var submitBtn = document.querySelector("#sumbit-button")
var finalScore = document.querySelector("#final-score")
var errorMessage = document.querySelector("#error-message")
var lastScore

// had to impliment a function to sumbit when "Enter" key is pressed manually, cause using a form in html was causing an error.
inputContainer.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
      saveInitials()
      changePage()
  }
})

// if user clicks the submit button, call saveInitials and changePage
submitBtn.addEventListener("click", function () {
  saveInitials()
  changePage()
});

// display the most recent saved score 
function displayScore () {
  lastScore = JSON.parse(localStorage.getItem("Score"))
  finalScore.textContent = lastScore
}
// save the initials that user inputs in to the input section
function saveInitials() {
  // trim the white space around the initials, in case the user hit space or something when they typed out their initials
  var userInitials = inputEl.value.trim();
  // if user didn't type anything in input field, display error message, call saveInitials() again
  if (userInitials === "" || !userInitials) {
    errorMessage.setAttribute("style", "display: initial;")
    saveInitials()
  }
  // store what the user typed in local storage
  storedInitials = localStorage.setItem("Initials", JSON.stringify(userInitials))
}

// change to high scores page
function changePage() {
  return window.location.assign("../html/high-scores.html")
}

displayScore() 