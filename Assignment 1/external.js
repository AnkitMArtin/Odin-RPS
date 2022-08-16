let playerWin = 0;
let computerWin = 0;
let tie = 0;

function playRound(playerSelection, computerSelection) {
  // your code here!

  if (playerSelection == computerSelection) {
    console.log("It is tie!!!! try Again");
    tie++;
    return tie;
  } else {
    if (playerSelection == "paper") {
      if (computerSelection == "rock") {
        console.log(playerSelection, " Beats rock");
        console.log("Player Win : ", ++playerWin);
        //return playerWin;
      } else {
        console.log("scissor Beats", playerSelection);
        console.log("Computer Win : ", ++computerWin);
        //return computerWin;
      }
    }

    if (playerSelection == "rock") {
      if (computerSelection == "scissor") {
        console.log(playerSelection, " Beats scissor");
        console.log("Player Win : ", ++playerWin);
        //return playerWin;
      } else {
        console.log(" Paper Beats", playerSelection);
        console.log("Computer Win : ", ++computerWin);
        //return computerWin;
      }
    }

    if (playerSelection == "scissor") {
      if (computerSelection == "paper") {
        console.log(playerSelection, " Beats paper");
        console.log("Player Win : ", ++playerWin);
        //return playerWin;
      } else {
        console.log("rock Beats", playerSelection);
        console.log("Computer Win : ", ++computerWin);
        //return computerWin;
      }
    }
  }
}

function Game() {
  for (let index = 0; index < 5; index++) {
    const playerSelection = getPlayerChoice(action);
    const computerSelection = getComputerChoice(action);
    console.log(playRound(playerSelection, computerSelection));

    let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");

table.appendChild(thead);
table.appendChild(tbody);

    // Creating and adding data to first row of the table
let row_1 = document.createElement("tr");
let heading_1 = document.createElement("th");
heading_1.innerHTML = "Sr. No.";
let heading_2 = document.createElement("th");
heading_2.innerHTML = "Name";
let heading_3 = document.createElement("th");
heading_3.innerHTML = "Company";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
thead.appendChild(row_1);

    table.appendChild(thead);
    table.appendChild(tbody);

    let row_2 = document.createElement("tr");
    let row_2_data_1 = document.createElement("td");
    row_2_data_1.innerHTML = index;
    let row_2_data_2 = document.createElement("td");
    row_2_data_2.innerHTML = playerSelection;
    let row_2_data_3 = document.createElement("td");
    row_2_data_3.innerHTML = computerSelection;

    row_2.appendChild(row_2_data_1);
    row_2.appendChild(row_2_data_2);
    row_2.appendChild(row_2_data_3);
    tbody.appendChild(row_2);

    
  }

  console.log(
    `Player Score ${playerWin} , Computer Score ${computerWin} , Tie Game ${tie}`
  );
}
const action = ["rock", "paper", "scissor"];
function getComputerChoice(action) {
  const randomIndex = Math.floor(Math.random() * action.length);
  const item = action[randomIndex];
  return item;
}

function getPlayerChoice(action) {
  const randomIndex = Math.floor(Math.random() * action.length);
  const item = action[randomIndex];
  return item;
}

console.log(Game());
let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");

table.appendChild(thead);
table.appendChild(tbody);

// Adding the entire table to the body tag
document.getElementById("body").appendChild(table);


