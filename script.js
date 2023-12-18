let board = [];
let rows = 8;
let columns = 8;
let minesCount = 5;
let minesLocation = [];
let tilesClicked = 0;
let flagEnabled = false;
let gameOver = false;

window.onload = function () {
  startGame();
};

function startGame() {
  document.querySelector("#mines-count").innerText = minesCount;
  document.querySelector("#flag-button").addEventListener("click", setFlag);

  for (let r = 0; r < rows; r++) {
    let row = [];

    for (let c = 0; c < columns; c++) {
      let tile = document.createElement("div");
      tile.id = `${r}-${c}`;
      tile.className = "board__tile";
      tile.addEventListener("click", clickTile);
      document.querySelector("#board").appendChild(tile);
      row.push(tile);
    }

    board.push(row);
  }

  console.log(board);
}

function setFlag() {
  if (flagEnabled) {
    flagEnabled = false;
    document.querySelector("#flag-button").style.backgroundColor = "lightgray";
  } else {
    flagEnabled = true;
    document.querySelector("#flag-button").style.backgroundColor = "darkgray";
  }
}

function clickTile() {
  let tile = this;

  if (flagEnabled) {
    if (tile.innerText == "") {
      tile.innerText = "🚩";
    } else if (tile.innerText == "🚩") {
      tile.innerText = "";
    }
  }
}
