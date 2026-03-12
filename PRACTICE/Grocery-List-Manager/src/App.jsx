import { useState} from 'react';
import Items from './components/Items'
export default function App(){
  const [groceryList,setGroceryList] = useState([]);
  const [inputItem,setInputItem]  = useState("");
  function handleGroceryList(){
    if(inputItem.trim() === ""){
      alert("Item name cannot be empty")
    }else if(groceryList.includes(inputItem)){
      alert("Item already exist in the list")
    }else{
      setGroceryList((prevList) => {
        const updatedList = [...prevList,inputItem.trim()];
        return updatedList;
      });
      setInputItem("");
    }
  }
  return (
    <>
      <h1>Grocery List Manager</h1>
      <input type="text" required value = {inputItem} onChange={(e) => setInputItem(e.target.value)} />
      <button onClick = {() => handleGroceryList()}>Add Item</button>
      <Items list = {groceryList} setList = {setGroceryList}/>
    </>
  );

}