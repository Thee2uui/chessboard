var board = document.getElementsByClassName('board')[0];

var boardx = {};

for(let i = 1; i < 9;i++){
    var row = document.createElement('div');
    row.classList.add('row');
    for(let j = 1; j < 9 ; j++){
        var newD = document.createElement('div');
        newD.classList.add('fis')
        if((i+j )% 2 == 0){
            newD.classList.add('white')
        }else{
            newD.classList.add('black')
        }
        var id = String.fromCharCode(73-i) + j;

        boardx[String.fromCharCode(73-i) + j] = 0;

        newD.id = id;
        row.appendChild(newD);
    }
    board.appendChild(row)
}

// var slider = document.getElementById("slider");
// slider.addEventListener('input', function(){
//     var value = slider.value;
    
//     var f = document.getElementsByClassName('fis');
//     for(var k = 0; k < f.length; k++){
//         var fx = f[k];
//         fx.style.width = value + 'px';
//         fx.style.height = value + 'px';
//     }
// })

class Piece {
    constructor(name, symbol, color) {
      this.name = name;
      this.symbol = symbol;
      this.color = color;
    }
  }
  
  class Rook extends Piece {
    constructor(color) {
      super('Rook', color== 'black'?'♜' : '♖' , color);
    }
  }

  class Pawn extends Piece {
    constructor(color) {
      super('Pawn', color== 'black'?'♟' : '♙' , color);
    }
  }
  
  class Knight extends Piece {
    constructor(color) {
      super('Knight', color== 'black'?'♞' : '♘' , color);
    }
  }
  
  class Bishop extends Piece {
    constructor(color) {
      super('Bishop', color== 'black'?'♝' : '♗' , color);
    }
  }
  
  class Queen extends Piece {
    constructor(color) {
      super('Queen', color== 'black'?'♛' : '♕' , color);
    }
  }
  
  class King extends Piece {
    constructor(color) {
      super('King', color== 'black'?'♚' : '♔' , color);
    }
  }
  
var fen = 'r5k1/2p2p1n/b5pp/p3P3/PQ1N4/7P/1rPRNPP1/R5K1';
var fenlines = fen.split('/');
var rowsOfTheBoard = [ "A", "B", "C", "D", "E", "F", "G", "H" ];

var si = 'white';

for (let ui = 1; ui < 9; ui++) {
  let xi = 1; 

  for (let ci = 0; ci < fenlines[ui - 1].length; ci++) {
    var lett = fenlines[ui - 1][ci];

    if (/[a-z]/i.test(lett)) {
      si = /[a-z]/.test(lett) ? 'black' : 'white';
      var lett = lett.toLowerCase();

      let piece;

      switch (lett) {
        case 'p':
          piece = new Pawn(si);
          break;
        case 'r':
          piece = new Rook(si);
          break;
        case 'b':
          piece = new Bishop(si);
          break;
        case 'q':
          piece = new Queen(si);
          break;
        case 'n':
          piece = new Knight(si);
          break;
        case 'k':
          piece = new King(si);
          break;
        default:
          break;
      }

      boardx[rowsOfTheBoard[8 - ui] + (xi)] = piece;
      xi++;
    } else if (/[1-9]/i.test(lett)) {
      let numCount = parseInt(lett);

      for (let oi = 0; oi < numCount; oi++) {
        boardx[rowsOfTheBoard[8 - ui] + (xi + oi)] = 0;
      }

      xi += numCount; 
    }
  }
}


function drawboard(){
for (var square in boardx) {
    if (boardx[square] != 0) {
    var piece = boardx[square];
    var divo = document.querySelector('#' + square);

    if (divo && piece) {
        divo.innerHTML = piece.symbol;
    }
    }
}
}

drawboard()


