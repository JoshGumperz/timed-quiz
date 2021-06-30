// grab all the elements from high-scores.html I want to change/use, store them in variables
var highScoresList = document.querySelector(".high-scores-list")
var homeButton = document.querySelector("#home-button")
var clearButton = document.querySelector("#clear-button")
// get all the elements from local storage I want to display, store them in variables for later use 
var lastScore = JSON.parse(localStorage.getItem("Score"))
// if there are already values stored in highScores array, use those, if not then just create a new empty array to fill
var highScores = JSON.parse(localStorage.getItem("highScores")) || []
var storedInitials = JSON.parse(localStorage.getItem("Initials"))



// save scores and initials into highScores array
function saveScores() {
    // if storedInitials contains nothing, or is null, end the function eary. Otherwise, continue
    if (!storedInitials || storedInitials === "") {
        return
    }
    else {
        // save most recent score, and initials the user typed in after they got that score into the same object
        var displayScore = {
            score: lastScore,
            initials: storedInitials
        }
        // if high scores has less than 5 values in it, push displayScore into highScores array
        if (highScores.length < 5) {
            highScores.push(displayScore)
        }
        // if high scores has more than 5 values in it, check to see if most recent score is >= one of the scores on currently on the high scores list. If it is, replace the lowest score on current highScores list, with the data saved in displayScore
        else if (highScores.length = 5) {
            for (var i = 0; i < highScores.length; i++) {
                if (displayScore.score >= highScores[i].score) {
                    highScores.splice(4, 1, displayScore)
                    {break}
                }
            }
        }
        // sort high scores list, so it's always automatically ordered by score highest-lowest
        highScores.sort(function (a, b) {
            return b.score - a.score
        });
        // save highScores array to local storage
        localStorage.setItem("highScores", JSON.stringify(highScores))
    }
}
// create a list element for each item in highScores array
function addScore() {
    highScores = JSON.parse(localStorage.getItem("highScores"))
    // create a loop that loops through the length of highScores array, and creates a new <li> element for each value in highScores array
    for (var i = 0; i < highScores.length; i++) {
        // join highScores array back in to a string so it can be displayed as list items
        highScores.join("")
        newScore = document.createElement("li")
        highScoresList.appendChild(newScore)
        // set the text content of each new <li> element to match the initials and score of the value at current index position in highScores array
        newScore.textContent = highScores[i].initials + " - " + highScores[i].score
    }

}

// create function to clear the high scores list when clear button is clicked
clearButton.addEventListener("click", function () {
    // clear everything in local storage
    localStorage.clear("highScores")
    // remove all <li> elements in high scores list 
    highScoresList.removeChild(newScore)
    // reload so new changes take effect
    location.reload()
})
// check to make sure highScores array isn't null
function checkScore () {
    // call saveScores to check highScores array, if it's not null/empty, then call addScore()
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
