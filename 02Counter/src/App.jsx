/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter ] = useState(0)  //acts as an declaration like let , we get 2 in the form of Array 1st is the name it could be anything , 2nd is the method/function usually we call it setCounter or it can be named anything 2nd element controls the 1st variable 

  // let counter = 5 ;

  const addValue = ()=>{
    counter = counter + 1
    setCounter(counter)
    // or
    // setCounter(counter + 1 )

    // setCounter(pervCounter => pervCounter + 1 )
    // setCounter(pervCounter => pervCounter + 1 )
    // setCounter(pervCounter => pervCounter + 1 )
    // setCounter(pervCounter => pervCounter + 1 )
    // setCounter(pervCounter => pervCounter + 1 )

    console.log("Clicked : Counter Added - ",counter);
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1 )
      console.log("Clicked : Counter Removed - ",counter);
      
    }else{
      setCounter(counter = 0)
      console.log("Counter cannot go below 0");
    }
  }

  const reset = () => {
    setCounter(0)
  }
  return (
    <>
      <h1>Deepak Chavan - React</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button><br/>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default App
