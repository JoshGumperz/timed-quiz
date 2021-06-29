var highScores = document.querySelector(".high-scores-list")
var homeButton = document.querySelector("#home-button")
var clearButton = document.querySelector("#clear-button")
var listItem1 = document.querySelector("#list-item1")
var listItem2 = document.querySelector("#list-item2")
var listItem3 = document.querySelector("#list-item3")
var listItem4 = document.querySelector("#list-item4")
var listItem5 = document.querySelector("#list-item5")
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
    saveScores()
    savedScores = JSON.parse(localStorage.getItem("highScores"))
    savedScores.join("")
    listItem1.textContent = savedScores[0].initials + " - " + savedScores[0].score
    listItem2.textContent = savedScores[1].initials + " - " + savedScores[1].score
    listItem3.textContent = savedScores[2].initials + " - " + savedScores[2].score
    listItem4.textContent = savedScores[3].initials + " - " + savedScores[3].score
    listItem5.textContent = savedScores[4].initials + " - " + savedScores[4].score

}

clearButton.addEventListener("click", function () {
    localStorage.clear("highScores")
    listItem1.textContent = ""
    listItem1.textContent = ""
    listItem1.textContent = ""
    listItem1.textContent = ""
    location.reload()
})

addScore()
