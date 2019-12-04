// es-6
const playerX = "x";
const player0 = "0";

let currentPlayer = playerX;
let board = ["","","","","","","","",""];
let messageView = document.querySelector(".status-text"); 
let boardView = document.querySelectorAll(".game-board>.cell");

console.log(currentPlayer);
console.log(board);
console.log(boardView);

initGameBoard();

function initGameBoard() {
    messageView.textContent = "Game started. First is Player X";
    boardView.forEach(initItemView);
}

function initItemView(view, index) {
    view.textContent = "";
    view.onclick = () => onCellPressed(view, index);
}

function onCellPressed(view, index) {
    if (!checkStep(index)) return;

    board[index] = currentPlayer;
    updateViews();

    if (checkWin()) {
        onWin();
        return;
    }

    if (checkWithoutWinner()) {
        onWithoutWinner();
        return;
    }

    changePalayer();
}

function checkStep(index) {
    // view.onclick = null;
    return board[index] == "";
}

function updateViews() {
    boardView.forEach((view, index) => {
        view.textContent = board[index];
    });
}

/*
    0 1 2
    3 4 5
    6 7 8
*/
function checkWin() {
    const combinations = [
        [0,1,2], [3,4,5], [6,7,8], 
        [0,3,6], [1,4,7], [2,5,8], 
        [0,4,8], [2,4,6],
    ];

    let check = false;
    combinations.forEach((items) => {
        const value0 = board[items[0]]; 
        const value1 = board[items[1]]; 
        const value2 = board[items[2]]; 
        check |= value0 != "" && value0 == value1 && value1 == value2;
    });

    return check;
}

function checkWithoutWinner() {
    let count = 0;
    board.forEach((item) => {
        if (item != "") count++;
    });

    return count == board.length;
}

function changePalayer() {
    if (currentPlayer == playerX) {
        currentPlayer = player0;
    } else {
        currentPlayer = playerX;
    }

    messageView.textContent = `Step is Player ${currentPlayer.toUpperCase()}`
}

function onWin() {
    messageView.textContent = `Winner is ${currentPlayer.toUpperCase()}`;
}

function onWithoutWinner() {
    messageView.textContent = "Without winner";
}