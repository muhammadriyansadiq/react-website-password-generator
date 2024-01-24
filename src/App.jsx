import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [ranged, setRanged] = useState(0)
  const [Number, setNumber] = useState(false)
  const[passwordtype , setPasswordtype] = useState("Weak Password")
  const [Character, setCharacter] = useState(false)
  const[passwordlength,setPasswordlength] = useState({ranged})
  const [genpasswordvalue, setGenpasswordvalue] = useState(0)
  let inputString = "abcdefghijklmnopqrstuvwxyz";
let randomString;


  if(Number){
    inputString += "123456789";
  }
  if(Character){
    inputString += "~`!@#$%^&*()_-+=}{\][?'|/.,><";
  }
 
   randomString = "";
  for (let i = 0; i < passwordlength; i++) {
    const randomIndex = Math.floor(Math.random() * inputString.length);
    randomString += inputString[randomIndex];
  }

  const rangedfunction = (e)=>{
    setRanged(e.target.value)
    setPasswordlength(e.target.value)
    setGenpasswordvalue(e.target.value)
  }

  const Numberfunction = ()=>{
    setNumber((prev)=> !prev)
  }
  
  const characterfunction = () =>{
    setCharacter((prev)=> !prev) 
    
  }
  const genaratepassword = ()=>{
    // console.log("ok");
  randomString = "";
  for (let i = 0; i < passwordlength; i++) {
    const randomIndex = Math.floor(Math.random() * inputString.length);
    randomString += inputString[randomIndex];
  }
  setRanged(randomString)
  console.log("randomstring".length,randomString);
  setGenpasswordvalue(randomString.length)
}

useEffect(()=>{

  if(Number){
    console.log("Number true hai");
    setPasswordtype("strong")
    if(Character){
      setPasswordtype("very strong")
    }
  }
  else{
    setPasswordtype("Weak password")
  }

},[Number, Character])


console.log(randomString);

  return (
    <div className=' w-full  h-screen flex justify-center align-middle'>

      <div className=' bg-blue-950 rounded h-screen flex  flex-col items-center box' >

        <h1 className=' text-white text-center p-2'>Password Genarator</h1>
        <div className=' bg-slate-900 w-full rounded-lg h-screen flex flex-col justify-between'>
       <div className=' text-center my-2 h-full flex flex-col justify-between'>
        <input type="text" placeholder='Password' value={randomString} 
        className=' bg-transparent border-2 border-white p-3 w-11/12 rounded-xl text-white'/>
        <p className=' text-left my-1 mx-5 text-lime-500 strong'>{passwordtype}</p>
        <div className=' flex shadow shadow-slate-800 my-3'>
        <p className=' text-left my-1 mx-5 text-white'>Password length {genpasswordvalue}</p>
        <input id='length' type="range" min={0} max={100} value= { genpasswordvalue } onChange={rangedfunction}/>  
        </div>
        <div className=' flex shadow shadow-slate-800 my-3'>
        <input className=' mx-4' type="checkbox" id='Number' onChange={Numberfunction}/>
        <p className=' text-left my-1 mx-5 text-white'>Number</p>
        </div>
        <div className=' flex shadow shadow-slate-800 my-3'>
        <input type="checkbox" className='mx-4' id='Character' onChange={characterfunction}/>
        <p className=' text-left my-1 mx-5 text-white'>Special Character</p>
        </div>
        <div>      
          <button className='  bg-blue-800 w-11/12 p-2 rounded-lg text-white' onClick={genaratepassword}>Genarate</button>
</div>
        </div> 
      
    </div>
    <div className=' bg-slate-950 w-3/4 my-3 p-4 text-center text-white rounded text-lg flex flex-wrap overflow-x-scroll'>{randomString}</div>
    </div>
    </div>
  )
}

export default App
