import { useReducer } from "react"

const initialState={
    data:[],
    loading:false,
    error:null
}

function reducer(state,action){
    switch (action.type) {
        case "FETCH_DATA_START":
            return{...state,loading:true,error:null}
        case "FETCH_DATA_SUCCESS":
            return{loading:false,error:null,data:action.payload}
        case "FETCH_DATA_FAILED":
            return{...state,loading:false,error:action.payload}

        case "DELETE_DATA":
            return{...state,data:state.data.filter((item)=>(
                item.id!==action.payload
            ))
        }
        case "ADD_DATA":
            return{...state,data:[...state.data,action.payload]}
        default:
            break;
    }
}

const UseReducer = () => {
const[state,dispatch]=useReducer(reducer,initialState);

    const fetchData=async()=>{
        dispatch({type:"FETCH_DATA_START"})

        try {
            const response=await fetch('https://jsonplaceholder.typicode.com/posts')
            const data=await response.json()
            dispatch({type:"FETCH_DATA_SUCCESS",payload:data})

        } catch (error) {
            dispatch({type:"FETCH_DATA_FAILED",payload:error.message})
        }
    }
    const deleteData=(newData)=>{
        dispatch({type:"DELETE_DATA",payload:newData})
    }
    const addData=(title)=>{
        dispatch({type:"ADD_DATA",payload:title})
    }
  return (
    <div>
        <button onClick={fetchData}>Fetch Data</button>
        {state.loading && <p>Loading...</p>}
        {state.error && <p>Fetching error {state.error}</p>}
        <ul>
            {state.data.map((item)=>(
                <li key={item.id}>{item.id}-{item.title}{" "}
                <button onClick={()=>deleteData(item.id)}>Delete</button>
                </li>
                
            ))}
        </ul>
        <hr />
        <form onSubmit={(e)=>{e.preventDefault()
            addData((e)={
                id:Date.now(),
                title:e.target.title.value,
            })
        }}>
            <input type="text" name="title" placeholder="Add a item" />
            <button >Add</button>
        </form>
    </div>
  )
}

export default UseReducer