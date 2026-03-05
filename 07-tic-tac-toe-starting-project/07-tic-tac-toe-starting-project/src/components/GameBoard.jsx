import { useState } from 'react';

const initialGameBoard = [
 [null,null,null],
 [null,null,null],
 [null,null,null]
]

export default function GameBoard({onSelectSquare,turns}){
//  const [gameBoard,setGameBoard] = useState(initialGameBoard);
//  function handleSelectSquare(rowIndex,colIndex){
//   setGameBoard(() => {
//    const updatedGameBoard = [...gameBoard.map((innerArray) => [...innerArray])];
//    updatedGameBoard[rowIndex][colIndex] = currActivePlayer;
//    return updatedGameBoard;
//   })
//   onSelectSquare();
//  }
  let gameBoard = initialGameBoard;
  for(const turn of turns){
    const {square,player} = turn;
    const {row,col} = square;
    gameBoard[row][col] = player;
  }
 return (
  <ol id="game-board">
   {
    gameBoard.map((row,rowIndex) => (

    <li key = {rowIndex}>
     <ol>
      {
      row.map((playerSymbol,colIndex) => (
        <li key = {colIndex}>
         <button onClick = {gameBoard[rowIndex][colIndex] === null ? () => onSelectSquare(rowIndex,colIndex) : undefined}>{playerSymbol}</button>
         </li>
      ))}
     </ol>
    </li>)
   )}
  </ol>
 )
}