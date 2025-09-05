import { useState } from 'react'

import './App.css'

function App() {
   
 let [counter,setCounter] = useState(Math.floor(Math.random()*20+1))
let [Error, setError] = useState("");

  const addValue = ()=>{

      if(counter >= 20){
   
      setError("Warning : Value More Than 20 Not Acceptable")

        
      }else{
        counter = counter +1

        console.log("Clicked",counter);
        setError("")
        setCounter(counter)
      }
        
    
       
       
  }

  const removeValue = ()=>{

    if(counter <= 0 ){
      setError("Warning : Value Less Than 0 is Not Acceptable")
      
    }else{
    counter = counter - 1
    console.log("Remove Clicked",counter);
    setCounter(counter)
    setError("")

    }
    


  }
  return (
    <>
     <h1>Chai Aur React</h1>
     <h2>Counter Value: {counter}</h2>

     <button onClick={addValue}>Add Value</button>
     <br />
     <button onClick={removeValue}>Remove Value</button>

     <h5>{Error}</h5>
    </>
  )
}

export default App
