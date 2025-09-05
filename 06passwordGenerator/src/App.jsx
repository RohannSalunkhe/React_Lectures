import { useState,useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {

const [length,setLength] = useState(6)
const [numberAllowed,setNumberAllowed] = useState(false)
const [charAllowed,setCharAllowed] = useState(false)
const [password,setPassword] = useState("")

//ref hook
const passwordRef = useRef(null)
const passwordGenerator = useCallback(()=>{
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberAllowed) str+="0123456789"
  if(charAllowed) str+="!@#$%^&*~`"
  for (let i = 1; i <= length; i++) {
      let char = Math.floor((Math.random()*str.length +1))    
      console.log( Math.floor((Math.random()*str.length +1))   );
      
      pass += str.charAt(char)
  }
 setPassword(pass)


},[length,numberAllowed,charAllowed,setPassword])
   
useEffect(()=>{
  passwordGenerator()
},[length,numberAllowed,charAllowed,passwordGenerator])


const copyPasswordToClipboard = useCallback(()=>{
  passwordRef.current?.select(0);
  passwordRef.current?.setSelectionRange(0,length);
  window.navigator.clipboard.writeText(password)
},[password,length])

  return (
    <>
    <div className="relative flex h-[100vh] w-full items-center justify-center overflow-hidden text-white">
  
  <div className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-center blur-sm "></div>

  <div className="relative h-[70vh] w-[30vw] mt-12 rounded-2xl shadow-amber-300 bg-black/50 backdrop-blur-md">
     <h1 className="text-4xl text-center font-bold text-white ">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input 
        type="text"
        value={password}
        className="outline-none w-80 py-2 px-1 ml-5 mt-5  bg-white  font-bold rounded-2xl text-black" 
        placeholder='password'
        ref={passwordRef}
        />
        <button className="outline-none  border border-orange-700  py-2 ml-4 px-3  mt-5 bg-blue-500   hover:cursor-pointer font-bold hover:bg-blue-500 hover:duration-75 text-white rounded-2xl" 
        onClick={copyPasswordToClipboard}
        >Copy</button>
      </div>  
      <div className='flex flex-col text-sm gap-y-2 mt-10'>
        <div className='bg-gray-500  rounded-2xl ml-4 mr-4 '>

         <label htmlFor="" className=' text-center'>Length : {length}</label> <br />
         <input  type="range" min={6} max={33} value={length} className=' cursor-pointer ' onChange={(e)=>{setLength(e.target.value)}}/>

        </div>
        <div className='flex items-center gap-x-1'>

         
          <input type="checkbox" 
          defaultChecked={numberAllowed} 
          id='numberInput'
          onChange={()=>{
            setNumberAllowed((prev)=> !prev)
          }}  />

          
         <label htmlFor="numberInput">Numbers </label>

        </div>

        <div className=''>

         
          <input type="checkbox" 
          defaultChecked={charAllowed} 
          id='charInput'
          onChange={()=>{
            setCharAllowed((prev)=> !prev)
          }}  />

          
         <label htmlFor="charInput">Symbol </label>

        </div>
        <div className=''>

         
          <input type="checkbox" 
          defaultChecked={charAllowed} 
          id='charInput'
          onChange={()=>{
            setCharAllowed((prev)=> !prev)
          }}  />

          
         <label htmlFor="charInput">Lowercase </label>

        </div>
        <div className=''>

         
          <input type="checkbox" 
          defaultChecked={charAllowed} 
          id='charInput'
          onChange={()=>{
            setCharAllowed((prev)=> !prev)
          }}  />

          
         <label htmlFor="charInput">Uppercase </label>

        </div>
      </div>
  </div>
</div>
   
    </>
  )
}


export default App
