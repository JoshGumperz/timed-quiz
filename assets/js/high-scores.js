var highScoresList = document.querySelector(".high-scores-list")
var homeButton = document.querySelector("#home-button")
var clearButton = document.querySelector("#clear-button")
var lastScore = JSON.parse(localStorage.getItem("Score"))
var highScores = JSON.parse(localStorage.getItem("highScores")) || []
var storedInitials = JSON.parse(localStorage.getItem("Initials"))




function saveScores() {
    if (!storedInitials || storedInitials === "") {
        return
    }
    else {
        var displayScore = {
            score: lastScore,
            initials: storedInitials
        }
        if (highScores.length < 5) {
            highScores.push(displayScore)
        }
        else if (highScores.length = 5) {
            for (var i = 0; i < highScores.length; i++) {
                if (displayScore.score >= highScores[i].score) {
                    highScores.splice(4, 1, displayScore)
                    {break}
                }
            }
        }
        highScores.sort(function (a, b) {
            return b.score - a.score
        });
        localStorage.setItem("highScores", JSON.stringify(highScores))
    }
}

function addScore() {
    highScores = JSON.parse(localStorage.getItem("highScores"))
    for (var i = 0; i < highScores.length; i++) {
        highScores.join("")
        newScore = document.createElement("li")
        highScoresList.appendChild(newScore)
        newScore.textContent = highScores[i].initials + " - " + highScores[i].score
    }

}

clearButton.addEventListener("click", function () {
    localStorage.clear("highScores")
    highScoresList.removeChild(newScore)
    location.reload()
})

function checkScore () {
    saveScores()
    highScores = JSON.parse(localStorage.getItem("highScores"))
    if (highScores) {
        addScore()
    }
    else {
        return
    }
}
checkScore()
