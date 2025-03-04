import { useState } from "react";

const initialGameBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, colIndex) {
    // we use a function to update the state based on the previous state
    // React lets us pass previous state to the setter function by default
    setGameBoard((prevGameBoard) => {
      const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
      updatedGameBoard[rowIndex][colIndex] = "X";
      return updatedGameBoard;
    });
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex,colIndex) }>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
