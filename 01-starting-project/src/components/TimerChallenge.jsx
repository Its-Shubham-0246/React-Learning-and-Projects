import { useState,useRef } from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({title,targetTime}){
 const timer = useRef();
 const dialog = useRef();
 const [timeRemaining,setTimeRemaining] = useState(1000 * targetTime);
 const timerIsActive = timeRemaining > 0 && timeRemaining < 1000 * targetTime;
 if(timeRemaining <= 0){
  clearInterval(timer.current);
  dialog.current.open();
 }

 function handleStart(){
  timer.current = setInterval(() => { 
   setTimeRemaining(prevTime => prevTime - 10);
  },10)
 }
 function handleStop(){
  clearInterval(timer.current);
  dialog.current.open();
 }
 function handleReset(){
    setTimeRemaining(1000 * targetTime);
 }
 return <section className = "challenge">
  <ResultModal ref = {dialog} timeRemaining = {timeRemaining} targetTime = {targetTime} onReset = {handleReset}/>
  <h2>{title}</h2>
  <p className="challenge-time"> 
   {targetTime} second{targetTime > 1 ? 's':''}
  </p>
  <p>
   <button onClick = {timerIsActive ? handleStop:handleStart}>
    {timerIsActive? "Stop":"Start"} Challenge
   </button>
  </p>
  <p className={timerIsActive ? 'active':undefined}>
   {timerIsActive ? 'Time is Running':'Timer inactive'}
  </p>
 </section>
}