import { useState } from "react"
import NewMemo from "./NewMemo";

const Memo = () => {

    const [count,setCount]=useState(0);

    const[input,setInput]=useState('');

    function handaleInput(e){
        setInput(e.target.value)
    }


  return (
    <div className='hero'>
        <h1 >{count}</h1>
        <button onClick={()=>setCount(count+1)}>click me</button>
        <br />
        <input type="text" value={input} onChange={handaleInput}/>
        <hr />
        <NewMemo newCount={count}/>
    </div>
  )
}

export default Memo