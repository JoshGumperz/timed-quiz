var highScoresButton = document.querySelector("#highscores-button")

highScoresButton.addEventListener("click", function() {
    changePage()
})

function changePage() {
    localStorage.removeItem("Score")
    localStorage.removeItem("Initials")
    return window.location.assign("assets/html/high-scores.html")
  }