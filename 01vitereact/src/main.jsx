/* eslint-disable no-unused-vars */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp() {
  return (
    <>
      <h1>Custom APP</h1>
    </>
  )
}

const anotheruser = "Deepak"

const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google </a>
)

const reactELement = React.createElement('a', {href:"https://google.com",target:"_blank"}, 'Hello, Click me to visit Google !',anotheruser)


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   {/* <App /> */}
  //   {/* <MyApp/> */}
  // </StrictMode>,

// anotherElement
reactELement
)

export default MyApp