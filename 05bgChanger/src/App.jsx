import { useState , useEffect } from 'react'
import './App.css'

function App() {

  const [color,setColor] = useState(() => localStorage.getItem("bgColor") || "bg-olive-500")
  // Save color to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("bgColor", color)
  }, [color])
  

  return (
    <>
      <div className="w-[100vw] h-[100vh]"
      style={{backgroundColor : color}}
      >
        
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
          <div className="flex flex-wrap justify-center gap-3 shadow-2xl bg-white px-3 py-2 rounded-3xl text-black">
            <button
            onClick={()=>setColor("red")}
            className="bg-red-500 outline-none px-4  py-1 rounded-3xl shadow-lg"
             style={{backgroundColor:"red"}}>Red</button>
            <button 
            onClick={()=>setColor("green")}
            className="outline-none px-4  py-1 rounded-3xl shadow-lg"
            style={{backgroundColor:"green"}}>Green</button>
            <button
            onClick={()=>setColor("orange")}            
            className="outline-none px-4  py-1 rounded-3xl shadow-lg"
            style={{backgroundColor:"orange"}}>Orange</button>
            <button 
            onClick={()=>setColor("pink")} 
            className="outline-none px-4  py-1 rounded-3xl shadow-lg"
            style={{backgroundColor:"pink"}}>Pink</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
