import './App.css'
import { useState } from 'react';
import confetti from 'canvas-confetti';

import { TurnInformation } from './components/TurnInformation';
import { GameBoard } from './components/GameBoard';
import { EndGameDialog } from './components/EndGameDialog';

import { TURNS, getWinner} from './components/Utils';



function App() {

  const [gameBoard, setBoard] = useState(() => {
    const savedGameBoard = localStorage.getItem('gameBoard');
    
    if(savedGameBoard) return JSON.parse(savedGameBoard);
    return Array(9).fill(null)
  });

  const [turn, setTurn] = useState( () => {
    const saveTurn = localStorage.getItem('currentTurn');
    
    if(saveTurn) return saveTurn;
    return TURNS.X
  });

  const [winner, setWinner] = useState(null);

  const updateBoard = (selectedIndex) => {

    if(gameBoard[selectedIndex] || winner)  return;

    const updatedBoard = [...gameBoard];
    updatedBoard[selectedIndex] = turn;
    setBoard(updatedBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    localStorage.setItem('gameBoard', JSON.stringify(updatedBoard));
    localStorage.setItem('currentTurn', newTurn);

    const newWinner = getWinner(updatedBoard);
    
    if(newWinner){
      setWinner(newWinner);
      confetti();
    } else if(isDrawGame(updatedBoard)) {
      setWinner(false);
    }
  }

  const isDrawGame = (gameBoard) => {
    return !gameBoard.includes(null) && winner === null;
  }

  const resetGame = () => {
    setTurn(TURNS.X);
    setBoard(Array(9).fill(null));
    setWinner(null);
  }

  return (
    <main className='board'>
      <h1>Tic-tac-toe Game</h1>
      <button onClick={resetGame}>Reset Game</button>
      <GameBoard gameBoard={gameBoard} updateBoard={updateBoard}></GameBoard>
      <TurnInformation currentTurn={turn}></TurnInformation>
      <EndGameDialog winner={winner} resetGame={resetGame}/>
    </main>
  )
}

export default App
