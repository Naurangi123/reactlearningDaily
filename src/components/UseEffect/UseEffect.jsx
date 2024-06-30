import { useEffect, useState } from "react"

const UseEffect = () => {
    const [clicked,setClicked]=useState()

    useEffect(()=>{
        console.log('we r in use state')
        return(
            ()=>{
                console.log('return of use state')
            }
        )
    },[])

  return (
    <div className="form">
        <button onClick={()=>setClicked("Subscriber")}>Subscriber</button>
        <br/>
        <hr/>
        <button onClick={()=>setClicked("To")}>To</button>
        <br/>
        <hr/>
        <button onClick={()=>setClicked("DropXOut")}>DropXPut</button>

        <h1>{clicked}</h1>
    </div>
  )
}

export default UseEffect