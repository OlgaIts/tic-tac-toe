let players = ['x', 'o'];
let activePlayer = 0;
let board;

function startGame() {
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  activePlayer = 0;
  renderBoard(board);
}

function click(row, col) {
  board[row][col] = players[activePlayer];
  renderBoard(board);
  
  if (
    board[row][0] === players[activePlayer] && 
    board[row][1] === players[activePlayer] && 
    board[row][2] === players[activePlayer] 
    ) {
    showWinner(activePlayer);
    } else if (
    board[0][col] === players[activePlayer] && 
    board[1][col] === players[activePlayer] && 
    board[2][col] === players[activePlayer]
    ) { 
    showWinner(activePlayer);
  } else if (
      board[0][0] === players[activePlayer] &&
      board[1][1] === players[activePlayer] &&
      board[2][2] === players[activePlayer] 
      ) {
    showWinner(activePlayer);
  } else if (
      board[0][2] === players[activePlayer] &&
      board[1][1] === players[activePlayer] &&
      board[2][0] === players[activePlayer]
     ) {
    showWinner(activePlayer);
  }

  activePlayer = activePlayer === 0 ? 1 : 0;
}