/* eslint-disable no-unused-vars */

import './App.css'
import { Card } from './Components/Card'

function App() {
  let myObj = {
    name:"Deepak",
    age: 21
  }

  let newArray = [1,2,3,4 ]

  return (
    <>
     <h1 className='bg-gray-300 p-4 text-black rounded-xl mb-5 '>Hello Deepak Chavan</h1>
      
        <div className='max-w-screen-2xl flex gap-7'>
        <Card name="devil" btnText="Click Me "/>
        <Card name="Deepak"/> 
        <Card name="Chavan" btnText="Hello"/> 
        </div>
    </>
  )
}

export default App
