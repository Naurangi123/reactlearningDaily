import { useEffect, useRef, useState } from "react"

const UseRef = () => {
    const[userInput,setUserInput]=useState('');

    const renders=useRef(0);

    useEffect(()=>{
        renders.current=renders.current+1
    })

  return (
    <div className="hero">
        <input value={userInput} onChange={(e)=>{
            setUserInput(e.target.value)
        }} />
        <p>This components is renders {renders.current} times</p>
    </div>
  )
}

export default UseRef;