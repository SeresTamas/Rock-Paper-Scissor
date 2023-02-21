const delay = ms => new Promise(res => setTimeout(res, ms));

const startBtn = document.getElementById("startBtn")
const preGameHider = document.getElementById("hiderDiv1")
const gameScreenHider = document.getElementById("hiderDiv2")

const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissor = document.getElementById("scissor")

const values = {
    "rock": 0,
    "papper": 1,
    "scissors": 2
}

console.log(rock)

function startGame(){
    preGameHider.classList.add ("hide");
    gameScreenHider.classList.remove ("hide");   
}

function startRandomizer(max){
    return Math.floor(Math.random() * max)
}



startBtn.addEventListener("click", function(){
    startGame()
    let randomNumber = startRandomizer(3)
    console.log(randomNumber)
})



const ResultCalculator = function winLoseCalculator ( playerNumber, randomNumber ) {
    if ( playerNumber === randomNumber ) {
        return //Draw
    }
    if(  ){

    }

 
}

    








