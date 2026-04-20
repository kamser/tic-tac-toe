import './App.css'
import { useState } from 'react';

import { TurnInformation } from './components/TurnInformation';
import { GameBoard } from './components/GameBoard';

import { TURNS } from './components/Utils';



function App() {

  const [gameBoard, setBoard] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState(TURNS.X);

  return (
    <main className='board'>
      <h1>Tic-tac-toe Game</h1>
      <GameBoard gameBoard={gameBoard}></GameBoard>
      <TurnInformation currentTurn={turn}></TurnInformation>

    </main>
  )
}

export default App
