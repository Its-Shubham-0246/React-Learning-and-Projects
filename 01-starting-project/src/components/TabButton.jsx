export default function TabButton({children,onSelect}){
 // document.querySelector('button').addEventListener('click', function(){
 // })
 return (
 <li>
  <button onClick={onSelect}>{children}</button>
  </li>
 );
}