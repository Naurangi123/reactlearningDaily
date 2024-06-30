import { useReducer } from "react"
import UseReducer from "./UseReducer";


const reducer=(state,action)=>{
    if(action.type==="Incr"){
        return{count:state.count+1};
    }
    else if(action.type==="Decr"){
        return{count:state.count-1};
    }else{
        throw new Error("Unsuuported  Count")
    }

};

const UseReduce = () => {

    const[state,dispatch]=useReducer(reducer,{count:0});


    const handleInc=()=>{
        dispatch({type:"Incr"})
    }
    const handleDecr=()=>{
        dispatch({type:"Decr"})
    }


  return (
    <div className="hero">
        <UseReducer/>
        <hr />
        <h1>{state.count}</h1>
        <button onClick={handleInc}>+</button>
        <button onClick={handleDecr}>-</button>
    </div>
  )
}

export default UseReduce