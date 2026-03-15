import { useState } from 'react';

export default function Player({initialName,symbol,isActive,onChangeName}){
  const [playerName,setPlayerName] = useState(initialName);
  const [isEditing,setIsEditing] = useState(false);
  let editiblePlayerName = <span className="player-name">{playerName}</span>;;

  if(isEditing){
    editiblePlayerName = <input type="text" required value={playerName} onChange={(e) => setPlayerName(e.target.value)}/>;
  }
  
  function handleEditClick(){
    setIsEditing((editing) => !editing);
    if(isEditing){
      onChangeName(symbol,playerName);
    }
  }
  return (
    <li className = {isActive  ? "active" : undefined}>
      <span className="player">
        {editiblePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
 )
}