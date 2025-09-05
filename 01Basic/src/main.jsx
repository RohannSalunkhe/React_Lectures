import { StrictMode } from 'react'
import React  from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

const anotherVariable = "Rohan"

const  reactElement = React.createElement(
  'a',
  {
    herf: "https://google.com",
    target: "_blank",
  },
 "Click me to visit google",
 anotherVariable
)

// const anotherElement = (
//     <a href="https://google.com" target="_blank">Visit Google</a>
// )

createRoot(document.getElementById('root')).render(
   reactElement
)
