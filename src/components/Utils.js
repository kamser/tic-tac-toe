export const TURNS = {
  X: 'x',
  O: 'o'
};

export function isThereWinner(gameBoard){
    return isARowWinner(gameBoard) 
            || isAColumnWinner(gameBoard)
            ||  isADiagonalWinner(gameBoard);
           
}

function isARowWinner(gameBoard){
    const rowCounter = 3;
    console.log(gameBoard.length);
    var i = 1
    while(i <= gameBoard.length){
        if(gameBoard[i - 1] && (gameBoard[i - 1] === gameBoard[i] && gameBoard[i] === gameBoard[i + 1])) return true;
            i = i*rowCounter
    }
    return false;
}

function isAColumnWinner(gameBoard){
    const coulmnCounter = 3;
    for(var i = 0; i < coulmnCounter; i++){
        if(gameBoard[i] && (gameBoard[i] === gameBoard[i + coulmnCounter] && gameBoard[i] === gameBoard[i + coulmnCounter + coulmnCounter])) return true;
    }
    return false;
}

function isADiagonalWinner(gameBoard){
    const diagonalCounter = 2;
    var i = 0
    while(i <= diagonalCounter){
        if(gameBoard[i] && (gameBoard[i] === gameBoard[4] && gameBoard[i] === gameBoard[8 - i])) return true;
        i++;
        i = i * diagonalCounter
    }
    return false;
}