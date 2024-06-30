import { useMemo, useState } from "react"

const UseMemo = () => {

    const [count,setCount]=useState(0);

    const[input,setInput]=useState('');

    function handaleInput(e){
        setInput(e.target.value)
    }
    const result=useMemo(function slowFunction(){
        let sum=0;
        for(let i=0;i<=100;i++){
            sum=+i
        }
        console.log("im slow function")
        return sum;
    },[])


  return (
    <div className='hero'>
        <h1 >{count}</h1>
        <button onClick={()=>setCount(count+1)}>click me</button>
        <br />
        <hr />
        <input type="text" value={input} onChange={handaleInput}/>
        <hr />
        <h1>Input:{input}</h1>
        <hr />
        {result}

    </div>
  )
}

export default UseMemo;