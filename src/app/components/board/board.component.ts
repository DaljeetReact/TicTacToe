import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl:'./board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  squares: any[] = []; // all  the 9 value on the board
  xIsNext: boolean = true; // determin the current player base on bool value
  winner: string = ''; // set value using calucate winner function  is any condition matches

  constructor() {}

  ngOnInit() {
    this.newGame(); // on load run the function 
  }

  newGame() {
    this.squares = Array(9).fill('');
    this.xIsNext = true;
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number) {
    if (!this.squares[idx]) { // check if the square index value is empty
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }

    this.winner = this.calculateWinner();
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];  // destruct the value into abc variable 
      if ( // this if will check the store value in square array it could be X|O|blank
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a]; // if found return the value ( X or O )
      }
    }
    return '';
  }
}
