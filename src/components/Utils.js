export const TURNS = {
  X: 'x',
  O: 'o'
};

export function getWinner(gameBoard){
    const rowWinner = getRowWinner(gameBoard);
    const columnWinner = getColumnWinner(gameBoard);
    const diagonalWinner = getDiagonalWinner(gameBoard);

    if(rowWinner) return rowWinner;
    if(columnWinner) return columnWinner;
    if(diagonalWinner) return diagonalWinner
    
    return null;
           
}

function getRowWinner(gameBoard){
    const rowCounter = 3;
    var i = 1
    while(i <= gameBoard.length){
        if(gameBoard[i - 1] && (gameBoard[i - 1] === gameBoard[i] && gameBoard[i] === gameBoard[i + 1])) return gameBoard[i];
            i = i*rowCounter
    }
    return false;
}

function getColumnWinner(gameBoard){
    const coulmnCounter = 3;
    for(var i = 0; i < coulmnCounter; i++){
        if(gameBoard[i] && (gameBoard[i] === gameBoard[i + coulmnCounter] && gameBoard[i] === gameBoard[i + coulmnCounter + coulmnCounter])) return gameBoard[i];
    }
    return false;
}

function getDiagonalWinner(gameBoard){
    const diagonalCounter = 2;
    var i = 0
    while(i <= diagonalCounter){
        if(gameBoard[i] && (gameBoard[i] === gameBoard[4] && gameBoard[i] === gameBoard[8 - i])) return gameBoard[i];
        i++;
        i = i * diagonalCounter
    }
    return false;
}