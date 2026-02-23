import { useState } from 'react';

export default function Player({initialName,symbol}){
  const [playerName,setPlayerName] = useState(initialName);
  const [isEditing,setIsEditing] = useState(false);
  let editiblePlayerName = <span className="player-name">{playerName}</span>;;

  if(isEditing){
    editiblePlayerName = <input type="text" required value={playerName} onChange={(e) => setPlayerName(e.target.value)}/>;
  }

  function handleEditClick(){
    setIsEditing((editing) => !editing);
  }
  return (
    <li>
      <span className="player">
        {editiblePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
 )
}