let cell = document.getElementsByClassName('cell');


let player1 = prompt('Hi Player1! What is your name?') || 'Player1';
let player2 = prompt('Hi Player2! What is your name?') || 'Player2';

let winner = null;

let original = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];
let matrix = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

let isPlayer1 = true;

const togglePlayer = () => {
  isPlayer1 = !isPlayer1;
}

const updateMatrix = () => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
        matrix[i][j] = document.getElementById(`${i}${j}`).innerText;
    }
  }
}

const getPlayer = (str) => {
  if (str === 'X') {
    return `${player1}`
  } else {
    return `${player2}`;
  }
}
const equal = (a,b,c) => {
  return a === b && b === c && !!a;
}
const boardIsFull = (board) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j].length < 1) {
        return false
      }
    }
  }
  return true;
}
const checkWinner = () => {
  for (let i = 0; i < 3; i++) {
    // HORIZONTAL
      if (equal(matrix[i][0], matrix[i][1], matrix[i][2])) {
        alert(getPlayer(matrix[i][0]) + ' won!');
        matrix = original;
        winner = getPlayer(matrix[i][0]);
        return;
      }
    // VERTICAL
      if (equal(matrix[0][i], matrix[1][i], matrix[2][i])) {
        alert(getPlayer(matrix[0][i]) + ' won!');
        matrix = original;
        winner = getPlayer(matrix[i][0]);
        return;
      }
    // MAJOR DIAGNAL
      if (equal(matrix[0][0], matrix[1][1], matrix[2][2]))  {
        alert(getPlayer(matrix[0][0]) + ' won!');
        matrix = original;
        winner = getPlayer(matrix[i][0]);
        return;
      }
    // MINOR DIAGNAL
      if (equal(matrix[0][2], matrix[1][1], matrix[2][0]))  {
        alert(getPlayer(matrix[0][2]) + ' won!');
        matrix = original;
        winner = getPlayer(matrix[i][0]);
        return;
      }
    // TIE
      if (boardIsFull(matrix)) {
        alert('tie')
        matrix = original;
        return;
      }
  }
}

const makeMove = (() => {
  for (let i = 0; i < cell.length; i++) {
    let box = cell[i];
    const index = box.id.split('');
    const j = index[0];
    const k = index[1];
    box.addEventListener("click", function(event) {
      if (isPlayer1) {
        box.innerText = 'X';
      } else {
        box.innerText = 'O'
      }
      togglePlayer();
      updateMatrix();
      checkWinner();
      updateScore();
    });
  }
})()


const refresh = (() => {
  const button = document.getElementById('button');
  button.addEventListener("click", () => {
    for (let i = 0; i < cell.length; i++) {
      let box = cell[i];
      box.innerText = '';
      matrix = original;
    }
  })
})()

const updateScore = () => {
  const count = {};
  count[player1] = 0;
  count[player2] = 0;

  for (let key in count) {
    if (key === winner) {
      count[key]++;
    }
  }
  console.log(count)
}
console.log(winner)
updateScore();
