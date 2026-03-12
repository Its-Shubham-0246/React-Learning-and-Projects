import { useState }  from 'react';
export default function Item({index,item,deleteItem}){
 const [isPurchased,setIsPurchased] = useState(false);
 let status = "Not Purchased";
 let statusButton = "Mark Purchased";
 if(isPurchased){
  status = "Purchased";
  statusButton = "Mark Not Purchased";
 }
 function handleStatus(){
  setIsPurchased(!isPurchased);
 };
  return (
   <>
   <div>
    <li>{item} ({status})</li>
    <button onClick = {() => deleteItem(index)}>Delete</button>
    <button onClick = {handleStatus}>{statusButton}</button>
    </div>
   </>
  );
 }
