/* eslint-disable no-unused-vars */
import { useState } from 'react'

import './App.css'

function App() {

  console.log('App Rendered',Math.random() * 100);

  const [value,setvalue] = useState(1)
  //// const [multipliedvalue,setmultipliedvalue] = useState(1);
  // const multiplybyfive = () => {
  //   //// setmultipliedvalue(value * 5)
  //   setvalue(value + 1)
  // }

  // let multipliedvalue= value * 5;

  const clickme = () => {
    setvalue(value + 1);
  }

  return (
    <>
      <h1>Main Value : {value}</h1>
      <br />
        <button
        onClick={clickme}
        >Click to Multiply by 5 </button>
        <br /><br />
      {/* <h2>Maultiplied Value : {multipliedvalue}</h2> */}
    </>
  )
}

export default App
