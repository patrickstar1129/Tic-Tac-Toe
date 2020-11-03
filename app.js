let cell = document.getElementsByClassName('cell');

// let table = Array.from(cell);

let isPlayer1 = true;

const togglePlayer = () => {
  isPlayer1 = !isPlayer1;
}

const matrix = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

const updateMatrix = () => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
        matrix[i][j] = document.getElementById(`${i}${j}`).innerText;
    }
  }
}
//
// grab the id and change the item in the matrix instead


const getPlayer = (str) => {
  if (str === 'X') {
    return 'player1'
  } else {
    return 'player2';
  }
}
const equal = (a,b,c) => {
  return a === b && b === c && !!a;
}

const checkWinner = () => {
  for (let i = 0; i < 3; i++) {
    // HORIZONTAL
      if (equal(matrix[i][0], matrix[i][1], matrix[i][2])) {
        alert(getPlayer(matrix[i][0]) + ' won!');
      }
    // VERTICAL
      if (equal(matrix[0][i], matrix[1][i], matrix[2][i])) {
        alert(getPlayer(matrix[0][i]) + ' won!');
      }
    // MAJOR DIAGNAL
      if(equal(matrix[0][0], matrix[1][1], matrix[2][2]))  {
        alert(getPlayer(matrix[0][0]) + ' won!');
      }
    // MINOR DIAGNAL
      if(equal(matrix[0][2], matrix[1][1], matrix[2][0]))  {
        alert(getPlayer(matrix[0][2]) + ' won!');
      }
  }
}

const makeMove = (() => {
  for (let i = 0; i < cell.length; i++) {
    let box = cell[i];
    box.addEventListener("click", function(event) {
      if (isPlayer1) {
        box.innerText = 'X';
      } else {
        box.innerText = 'O'
      }
      togglePlayer();
      updateMatrix();
      checkWinner();
    });
  }
})()

// check winner

// changing the already filled up
