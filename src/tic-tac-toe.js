class TicTacToe {
    constructor() {
        this.x = 'x';
        this.o = 'o';
        this.current = this.x;
        this.matrix =new Array(3).fill(null);
        this.matrix = this.matrix.map(x=>new Array(3).fill(null));
    }

    getCurrentPlayerSymbol() {
        return this.current;
    }

    nextTurn(rowIndex, columnIndex) {
         if(!this.matrix[rowIndex][columnIndex]) {
            this.matrix[rowIndex][columnIndex]= this.current;
            this.current = this.current=== this.x ? this.o : this.x;
        }
    }

    isFinished() {
        return this.getWinner() !== null || this.isDraw();
    }

    getWinner() {
        var winner = null;

        for (var k = 0; k < 3; k++) {
            if (this.matrix[k][0] === this.matrix[k][1] && 
                this.matrix[k][0] === this.matrix[k][2]) {
                winner = this.matrix[k][0]; 
            }
        }

        for (var k = 0; k < 3; k++) {
            if (this.matrix[0][k] === this.matrix[1][k] && 
                this.matrix[0][k] === this.matrix[2][k]) {
                winner = this.matrix[0][k];
            }
        }

        if (this.matrix[0][0] === this.matrix[1][1] && 
            this.matrix[1][1] === this.matrix[2][2]) {
            winner = this.matrix[0][0];
        }

        if (this.matrix[0][2] === this.matrix[1][1] && 
            this.matrix[1][1] === this.matrix[2][0]) {
            winner = this.matrix[0][2];
        }

        return winner;
    }

    noMoreTurns() {
        var toReturn = this.matrix.reduce(function(prev, cur){
            return prev.concat(cur);
        }, []);
        return toReturn.every(elem => elem);
    }

    isDraw() {
        return !this.getWinner() && this.noMoreTurns();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
