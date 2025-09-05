// import { useState } from 'react'

import './App.css'
import Card from './components/card'
function App() {
  // const [count, setCount] = useState(0)

  // let myObj= {
  //   username: "Rohan",
  //   age:21
  // }

  return (
    <>
     <h1 className='bg-green-400 rounded-4xl font-bold text-blue-500 p-10 hover:cursor-pointer'>Tailwind Test</h1>
       <button className="relative rounded font-bold bg-[#6c757d] mt-10 mb-10 px-10 py-2 shadow-[0_5px_#495057] duration-300 ease-in-out hover:top-[1px] hover:shadow-[0_3px_#495057] active:shadow-[#495057]">
      Button
    </button> 
     <Card username="RohanAurCode"/>
     <Card username="RohanAurReact"/>
     <Card username="RohanAurJS"/>
    </>
  )
}

export default App
