
const startBut = document.getElementById("gameStart");
const restartBut = document.getElementById("restartGame");
const playerScore = document.getElementById("playerCount");
const botScore = document.getElementById("botCount");
const rockbut = document.getElementById("rock");
const knifebut = document.getElementById("knife");
const paperbut = document.getElementById("paper");
const compChoice = document.getElementById("compchoice");
const comment = document.getElementById("comment");
const round = document.getElementById("rounds");
let playerS = 0;
let compS = 0;
let rounds = 5;
let rockC = false;
let paperC = false;
let knifeC = false;

const rock = () => {
    rockC = true;
    paperC = false;
    knifeC = false;
}

const paper = () => {
    rockC = false;
    paperC = true;
    knifeC = false;
}

const knife = () => {
    rockC = false;
    paperC = false;
    knifeC = true;
}

function getComputerChoice () {
    const random = Math.random() * 100
if (random <= 33.3) {
    return "rock"
} else if (33.3 < random && random <= 66.6){
    return "scissors"
} else if (random > 66.6) {
    return "paper"
}
};

const gameplay = (compick, humapick) => {
    if (compick === humapick) {
        return "draw";
    } else if (compick === "rock" && humapick === "paper" ||
        compick === "scissors" && humapick === "rock" ||
        compick === "paper" && humapick === "scissors" 
     ) {
        return "human"
     } else if (humapick === "rock" && compick === "paper" ||
        humapick === "scissors" && compick === "rock" ||
        humapick === "paper" && compick === "scissors") {
            return "comp"
    }
}

const getPlayerChoice = () => {
    if(rockC ) {
        return "rock";
    } else if (paperC) {
        return "paper";
    } else if (knifeC) {
        return "scissors";
    } else {
        alert ("pick one!");
    }
    }


const gameStart = () => {
const comppick =  getComputerChoice();
const playerPick = getPlayerChoice();
const winner = gameplay(comppick, playerPick);
compChoice.innerText = comppick;

if(winner == "comp") {
    comment.innerText = "COMP WINS THIS ROUND!"
    compS += 1;
} else if (winner == "human") {
    comment.innerText = "YOU WIN THIS ROUND!"
    playerS += 1;
} else if (winner == "draw") {
    comment.innerText = "DRAWWWWWW!"
}

rounds -= 1;
playerScore.innerText = playerS;
botScore.innerText = compS;
round.innerText = rounds;

if (rounds === 0){
    if (playerS > compS) {
        comment.innerText = "YOU WIN :)"
    } else if (compS > playerS) {
        comment.innerText = "YOU LOSE :("
    } else {
        comment.innerText = "DRAWWWWWWWW TRY AGAIN?"
    }
    startBut.style.display = "none";
    restartBut.style.display = "block";
} 

};

const restartGame = () => {
 playerS = 0;
 compS = 0;
 rounds = 5;
 playerScore.innerText = playerS;
 botScore.innerText = compS;
 round.innerText = rounds;
 comment.innerText = "LET'S GOOO!";
 startBut.style.display = "block";
 restartBut.style.display = "none";
}


rockbut.addEventListener("click", () => {rock()});
paperbut.addEventListener("click", () => {paper()});
knifebut.addEventListener("click", () => {knife()});
startBut.addEventListener("click", () => {gameStart()});
restartBut.addEventListener("click", () => {restartGame()});