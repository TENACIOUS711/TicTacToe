import { useState } from 'react';
import './style.scss';
import Board from './components/board';
import { calculateWinner } from './winner';
import Status from './components/statusMessage';
import History from './components/History';

function App() {
  const [history, setHistory] = useState([
    { squares: Array(9).fill(null), isXNext: false },
  ]);
  console.log(history);
  const [currentMove, setCurrentMove] = useState(0);
  const gamingBoard = history[currentMove];

  const winner = calculateWinner(gamingBoard.squares);

  const handleSquareClick = clickedPosition => {
    if (gamingBoard.squares[clickedPosition] || winner) {
      return;
    }
    setHistory(currenthistory => {
      const isTraversing = currentMove + 1 !== currenthistory.length;
      const lastGamingState = isTraversing
        ? currenthistory[currentMove]
        : history[history.length - 1];

      const nextGamingState = lastGamingState.squares.map(
        (squareValue, position) => {
          if (position === clickedPosition) {
            if (lastGamingState.isXNext === false) {
              return 'X';
            } else {
              return 'O';
            }
          }

          return squareValue;
        }
      );
      const base = isTraversing
        ? currenthistory.slice(0, currenthistory.indexOf(lastGamingState) + 1)
        : currenthistory;
      return base.concat({
        squares: nextGamingState,
        isXNext: !lastGamingState.isXNext,
      });
    });

    setCurrentMove(move => move + 1);
  };
  const moveTo = move => {
    setCurrentMove(move);
  };

  return (
    <div className="app">
      <Status winner={winner} gamingBoard={gamingBoard} />
      <Board
        squares={gamingBoard.squares}
        handleSquareClick={handleSquareClick}
      />
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
}

export default App;
