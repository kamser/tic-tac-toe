import './App.css'
import { useState } from 'react';

import { TurnInformation } from './components/TurnInformation';
import { GameBoard } from './components/GameBoard';

import { TURNS } from './components/Utils';



function App() {

  const [gameBoard, setBoard] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState(TURNS.X);

  const [winner, setWinner] = useState(false);

  const updateBoard = (selectedIndex) => {

    if(gameBoard[selectedIndex]) return;

    const updatedBoard = [...gameBoard];
    updatedBoard[selectedIndex] = turn;
    setBoard(updatedBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);


  }

  return (
    <main className='board'>
      <h1>Tic-tac-toe Game</h1>
      <GameBoard gameBoard={gameBoard} updateBoard={updateBoard}></GameBoard>
      <TurnInformation currentTurn={turn}></TurnInformation>

    </main>
  )
}

export default App
