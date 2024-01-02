
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector('#msg');
const userScorep = document.querySelector("#user-score");
const computerScorep = document.querySelector("#comp-score");
const restartGame = document.querySelector("#btn");

let userScore = 0;
let computerScore = 0;

const genComputerChoice = () => 
{
    const options = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];

}

const drawGame = () => 
{
    console.log("Game was Draw");
    msg.innerText = "Game Was Draw! Please Play Again";
    msg.style.backgroundColor = "rgb(4, 4, 62)";
}

const showWinner = (userWin) => 
{
    if(userWin)
    {
        userScore++;
        userScorep.innerText = userScore;
        console.log("You win");
        msg.innerText = "You Win";
        msg.style.backgroundColor = "green";
    }
    else 
    {
        computerScore++;
        computerScorep.innerText = computerScore;
        console.log("You lose");
        msg.innerText = "You Lose";
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => 
{
    console.log("User Choice is ", userChoice);
    const computerChoice = genComputerChoice();
    console.log("Computer Choice is ", computerChoice);


    if(userChoice === computerChoice)
    {
        drawGame();
    }
    else 
    {
        let userWin = true;
        if(userChoice === 'rock')
        {
            userWin = computerChoice === 'paper' ? false : true;
        }
        else if(userChoice === 'paper')
        {
          userWin =   computerChoice === 'scissors' ? false : true;
        }
       else 
       {
       userWin =  computerChoice === 'rock' ? false : true;
       }

       showWinner(userWin);
    }
}


choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})



btn.addEventListener('click', () => 
{
    location.reload();
})