const Square = ({ value, onClick, isWinningSquare }) => {
  const textColor = value === 'X' ? 'text-green' : 'text-orange';
  const winSquare = isWinningSquare ? 'winning' : '';
  return (
    <button
      type="button"
      className={`square ${textColor} ${winSquare}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
