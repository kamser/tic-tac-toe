import './App.css'
import { useState } from 'react';

import { TurnInformation } from './components/TurnInformation';
import { GameBoard } from './components/GameBoard';

import { TURNS, isThereWinner} from './components/Utils';



function App() {

  const [gameBoard, setBoard] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState(TURNS.X);

  const [winner, setWinner] = useState(null);

  const updateBoard = (selectedIndex) => {

   if(gameBoard[selectedIndex])  return;

    if(isThereWinner(gameBoard)) {
      console.log('Winner!');
      return
    }
    else console.log('No winner yet');

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
