export default function TabButton({children,isSelected,...props}){
 // document.querySelector('button').addEventListener('click', function(){
 // })
 return (
 <li>
  <button className = {isSelected ? 'active':undefined} {...props}>{children}</button>
  </li> 
 );
}