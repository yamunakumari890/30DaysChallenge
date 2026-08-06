const choices = ["Rock", "Paper", "Scissors"];

let userScore = 0;
let computerScore = 0;

function playGame(userChoice){

  const randomIndex = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomIndex];


let result = "";

if (userChoice === computerChoice) {
  result = "🤝 It's a Draw!";
  
}

else if (
  (userChoice === "Rock" && computerChoice === "Scissors") ||
  (userChoice === "Paper" && computerChoice === "Rock") ||
  (userChoice === "Scissors" && computerChoice === "Paper")
) {
  userScore++;
  result = "🎉 You Win!";
}

   else {

        computerScore++;
        result = "😢 Computer Wins!";

    }

 document.getElementById("result").innerHTML = `
        <strong>You:</strong> ${userChoice} <br>
        <strong>Computer:</strong> ${computerChoice} <br><br>
        ${result}
    `;

    document.getElementById("score").innerText =
        `You : ${userScore} | Computer : ${computerScore}`;
}