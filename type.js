const buttons = document.querySelectorAll("input");
//const element = document.getElementById("ScoreBoard");
let playerScore = 0;
let computerScore = 0;
let tie = 0;

//player Input
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const test = button.value;
    playRound(test);
    pageScroll();
  });
});

//scrolling to bottom
function pageScroll() {
  window.scrollTo(0, document.getElementById("ScoreBoard").scrollHeight);
}

//computer input
function getComputerChoice() {
  const action = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * action.length);
  const item = action[randomIndex];
  console.log("Computer Choice ", item);
  return item;
}

//game logic
function playRound(playerSelection) {
  let computerSelection = getComputerChoice();
  document.getElementById("computerchoice").innerHTML = computerSelection;
  let result = "";

  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    playerScore += 1;
    result = " Player win! " + playerSelection + " beats " + computerSelection;

    document.getElementById("winner_message").innerHTML = result;
    if (playerScore == 5) {
      result += "Player won the game!!!! Reload the page to play again";

      alert("Player won the game! Reload the page to play again");
      window.location.reload();
    }
  } else if (playerSelection == computerSelection) {
    tie += 1;
    result = "It's a tie. You both chose " + playerSelection;

    document.getElementById("winner_message").innerHTML = result;
  } else {
    computerScore += 1;
    result = "You lose! " + computerSelection + " beats " + playerSelection;

    document.getElementById("winner_message").innerHTML = result;
    if (computerScore == 5) {
      result += "Computer won the game! Reload the page to play again";

      alert("Computer won the game! Reload the page to play again");
      window.location.reload();
    }
  }

  console.log(result);
  createTable(
    // calling table function
    playerSelection,
    computerSelection,
    playerScore,
    computerScore,
    tie
  );
  return;
}

/// table creation

var table = document.createElement("table");
var tr = document.createElement("tr");
let caption = table.createCaption();
caption.textContent = "Score Board of Rock , Paper, Scissor";
caption.style.fontSize = "20px";

caption.style.paddingBottom = "2em";

var array = [
  "Play-Round  ",
  "Player-Choice  ",
  "Computer-Choice  ",
  "Player-Win ",
  "Computer-Win  ",
  "  Tie-Game",
];

//creating table header
for (var j = 0; j < array.length; j++) {
  var th = document.createElement("th"); //column
  var text = document.createTextNode(array[j]); //cell
  th.style.padding = "5px";
  th.appendChild(text);
  tr.appendChild(th);
}
table.appendChild(tr);
let count = 0;

//function create table
function createTable(
  playerSelection,
  computerSelection,
  playerScore,
  computerScore,
  tie
) {
  var tr = document.createElement("tr");

  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  var td4 = document.createElement("td");
  var td5 = document.createElement("td");
  var td6 = document.createElement("td");

  var text1 = document.createTextNode(++count);
  var text2 = document.createTextNode(playerSelection);
  var text3 = document.createTextNode(computerSelection);
  var text4 = document.createTextNode(playerScore);
  var text5 = document.createTextNode(computerScore);
  var text6 = document.createTextNode(tie);

  td1.appendChild(text1);
  td2.appendChild(text2);
  td3.appendChild(text3);
  td4.appendChild(text4);
  td5.appendChild(text5);
  td6.appendChild(text6);

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  tr.appendChild(td6);

  table.appendChild(tr);

  document.getElementById("ScoreBoard").appendChild(table);
}
