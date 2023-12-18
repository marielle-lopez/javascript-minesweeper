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

  for (let r = 0; r < rows; r++) {
    let row = [];

    for (let c = 0; c < columns; c++) {
      let tile = document.createElement("div");
      tile.id = `${r}-${c}`;
      tile.className = "board__tile";
      document.querySelector("#board").appendChild(tile);
      row.push(tile);
    }

    board.push(row);
  }

  console.log(board);
}
