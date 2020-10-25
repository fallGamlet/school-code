// es-6
const playerX = "x";
const player0 = "0";

let currentPlayer = playerX;
let board = [];
let messageView = document.querySelector(".status-text"); 
let boardView = document.querySelector(".game-board");
let boardViewItems = document.querySelectorAll(".game-board>.cell");
let blockView = document.querySelector(".block-view");
let restartButton = document.querySelector(".restart-button"); 

initGameBoard();


function initGameBoard() {
    board = ["","","","","","","","",""];
    currentPlayer = playerX;

    messageView.textContent = "Game started. First is Player X";

    blockView.textContent = "";
    setBlockViewVisible(false);

    boardViewItems.forEach(initItemView);
    
    restartButton.onclick = initGameBoard;

    updateViews();
}

function initItemView(view, index) {
    view.textContent = "";
    view.onclick = () => onCellPressed(view, index);

    // make animation with random delay
    setTimeout(() => {
        animateDataChanging(view);    
    }, 300*Math.random());
    
}

function onCellPressed(view, index) {
    if (!checkStep(index)) return;

    board[index] = currentPlayer;
    animateDataChanging(view);
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
    boardViewItems.forEach((view, index) => {
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
    blockView.textContent = `Winner is ${currentPlayer.toUpperCase()}`;
    setBlockViewVisible(true);
}

function onWithoutWinner() {
    blockView.textContent = "Without winner";
    setBlockViewVisible(true);
}

function setBlockViewVisible(visible) {   
    blockView.classList.remove('fade-close');
    blockView.classList.remove('fade-full-open');

    if (visible) {    
        blockView.classList.add('fade-full-open');
    } else {
        blockView.classList.add('fade-close');
    }
}

/**
 * Make animation
 * @param {Element} view 
 */
function animateDataChanging(view) {
    const viewClassName = view.className;
    view.className = `${viewClassName} animation-change-data`;
    setTimeout(() => {
        view.className = viewClassName;
    }, 500);
}