import Item from "./Item.jsx";
export default function Items({list,setList}){ 
 function deleteItem(index){
 setList((prevList) => {
 const updatedList = [];
 for(let i = 0;i < prevList.length;i++){
  if(i !== index){
   updatedList.push(prevList[i]);
  }
 }
 return updatedList;
 });
 }
 return (
  <>
  <ol>
  {list.map((item,index) => 
  <Item index = {index} item = {item} deleteItem = {deleteItem} key = {index} />
  )}
  </ol>
  </>
 );
}