import { useState } from 'react';
import './style.scss';
import Board from './components/board';
import { calculateWinner } from './winner';

function App() {
  const [squares, setsquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(squares);
  const nextPlayer = isXNext ? 'O' : 'X';
  const status = winner ? `Winner is ${winner}` : `${nextPlayer}'s move`;

  console.log(winner);

  const handleSquareClick = clickedPosition => {
    if (squares[clickedPosition] || winner) {
      return;
    }
    setsquares(currentSquares => {
      return currentSquares.map((squareValue, position) => {
        if (position === clickedPosition) {
          if (isXNext === false) {
            return 'X';
          } else {
            return 'O';
          }
        }

        return squareValue;
      });
    });
    setIsXNext(currentX => {
      return !currentX;
    });
  };

  return (
    <div className="app">
      <h2>{status}</h2>
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
