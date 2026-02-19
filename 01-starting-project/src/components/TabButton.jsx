export default function TabButton({children,onSelect,isSelected}){
 // document.querySelector('button').addEventListener('click', function(){
 // })
 return (
 <li>
  <button onClick={onSelect} className = {isSelected ? 'active':undefined}>{children}</button>
  </li>
 );
}