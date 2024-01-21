const Status = ({ winner, gamingBoard }) => {
  const { squares, isXNext } = gamingBoard;

  const nextPlayer = isXNext ? 'O' : 'X';
  const noMovesLeft = squares.every(squareValue => squareValue !== null);

  const renderStatusmessage = () => {
    if (winner) {
      return (
        <>
          Winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      );
    }

    if (!winner && noMovesLeft) {
      return (
        <>
          <span className="text-green">X</span> and{' '}
          <span className="text-orange">O</span> tied!
        </>
      );
    }

    if (!winner && !noMovesLeft) {
      return (
        <>
          <span className={isXNext ? 'text-orange' : 'text-green'}>
            {nextPlayer}
          </span>
          's move
        </>
      );
    }
    return null;
  };

  return <div className="status-message">{renderStatusmessage()}</div>;
};

export default Status;
