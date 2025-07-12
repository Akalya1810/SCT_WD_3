let currentPlayer = 'X';
let gameActive = true;

function handleClick(cell) {
  if (!gameActive || cell.textContent !== '') return;

  cell.textContent = currentPlayer;

  if (checkWinner()) {
    const winnerName = currentPlayer === 'X' ? 'Akalya' : 'Vicky';
    document.getElementById('status').textContent = `🎉 ${winnerName} Wins! 🎊`;
    gameActive = false;
    return;
  }

  if (isDraw()) {
    document.getElementById('status').textContent = "😮 It's a Draw!";
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  const playerName = currentPlayer === 'X' ? 'Akalya' : 'Vicky';
  const emoji = currentPlayer === 'X' ? '❌' : '⭕';
  document.getElementById('status').textContent = `${playerName}'s Turn ${emoji}`;
}

function checkWinner() {
  const cells = Array.from(document.getElementsByClassName('cell'));
  const combos = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];

  return combos.some(([a, b, c]) => {
    return (
      cells[a].textContent &&
      cells[a].textContent === cells[b].textContent &&
      cells[b].textContent === cells[c].textContent
    );
  });
}

function isDraw() {
  const cells = document.getElementsByClassName('cell');
  return Array.from(cells).every(cell => cell.textContent !== '');
}

function resetGame() {
  const cells = document.getElementsByClassName('cell');
  for (let cell of cells) {
    cell.textContent = '';
  }
  currentPlayer = 'X';
  gameActive = true;
  document.getElementById('status').textContent = "Akalya's Turn ❌";
}
