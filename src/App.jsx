import './App.css'
import { GameSquare } from './components/GameSquare';
import { useState } from 'react';

const TURNS = {
  X: 'x',
  O: 'o'
};

function App() {

  const [gameBoard, setBoard] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState(TURNS.X);


  return (
    <main className='board'>
      <h1>Tic-tac-toe Game</h1>
      <section className='game'>
        {
          gameBoard.map((_, index) => {
            return (
              <GameSquare key={index} index={index}>
                {index}
              </GameSquare>
            );
          })
        }
      </section>
    </main>
  )
}

export default App
