/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import AddTodo from './Components/addToDo'
import Todos from './Components/Todos'

function App() {
  
  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App