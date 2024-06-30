import { useContext } from "react";
import { GreetContext} from "./Context"
const Context4 = () => {
    const useCon=useContext(GreetContext)
  return (
    <h1>Greet: {useCon.greet} {useCon.bye}</h1>
    // <GreetContext.Consumer>
    //     {
    //         (val)=>{
    //             return (
    //                 <Greet2Context.Consumer>
    //                     {
    //                         (val2)=>{
    //                             return <h1>Greet:{val} {val2}</h1>
    //                         }
    //                     }
    //                 </Greet2Context.Consumer>
    //             )
    //         }
    //     }
    // </GreetContext.Consumer>
  )
}

export default Context4;