
import { useState } from 'react'
import Header from './components/Header.jsx'
import UserInput from './components/UserInput.jsx'
import Result from './components/Result.jsx'
function App() {
  const [userInput,setUserInput] = useState({
  initialInvestment:15000,
  annualInvestment:5000,
  expectedReturn:6,
  duration:5
 });
 function handleChange(inputIdentifier,newValue){
  setUserInput(prevInput => {
   return {
    ...prevInput,
    [inputIdentifier]: +newValue
   }
  });
 }
 const inputIsValid = userInput.duration > 0;
  return (
  <>
    <Header/>
    <UserInput userInput = {userInput} onChange = {handleChange}/>
    {!inputIsValid && <p className='center'>Please Input Valid Input Data.</p>}
    {inputIsValid && <Result data = {userInput}/>}
  </>
  )
}

export default App
