// get highscores-button from index.html and store it in a variable for later use
var highScoresButton = document.querySelector("#highscores-button")

// create an event lister to listen for when the user clicks the highscores button, if user does click highscores button, call changePage
highScoresButton.addEventListener("click", function() {
    changePage()
})

// first, clear local storage so that highscores list doesn't add a new high score when user enters highscores page, then change to highscores page
function changePage() {
    localStorage.removeItem("Score")
    localStorage.removeItem("Initials")
    return window.location.assign("assets/html/high-scores.html")
  }