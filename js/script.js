document.getElementById("btn")


let startingScore = document.getElementById("startingScore")
let startingScore2 = document.getElementById("startingScore2")
let score = 0
let score2 = 0


function plusOne() {
    score = score + 1
    startingScore.textContent = score
}

function plusTwo() {
    score = score + 2
    startingScore.textContent = score
}

function plusThree() {
    score = score + 3
    startingScore.textContent = score
}

function plusOneS() {
    score2 = score2 + 1
    startingScore2.textContent = score2
}

function plusTwoS() {
    score2 = score2 + 2
    startingScore2.textContent = score2
}

function plusThreeS() {
    score2 = score2 + 3
    startingScore2.textContent = score2
    
}

function resetGame() {
    score = 0
    score2 = 0
    startingScore.textContent = 0
    startingScore2.textContent = 0
}