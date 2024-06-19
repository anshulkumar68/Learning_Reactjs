import { useState } from 'react'
import './App.css'

function App() {
  const [num, setNum] = useState(0)
  // let num = 10;
  const addValue = () => {num+1, setNum(num + 1), console.log(`Value increased to ${num}`);};
  const subValue = () => {num-1, setNum(num - 1), console.log(`Value decreased to ${num}`);} ;

 
  return (
    <>
    <h1>Current Value : {num}</h1>
    <button onClick={addValue}>Increase value : {num}</button> <br /> <br />
    <button onClick={subValue}>Decrease value : {num}</button>
    </>
  )
}

export default App
