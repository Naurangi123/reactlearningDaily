import { createContext } from 'react'
import Context2 from './Context2';



const GreetContext=createContext();

const Context = () => {
    const greet='Hello !!!'
    const bye='Bye'
  return (
    <GreetContext.Provider value={{greet,bye}} >
        <Context2 />
    </GreetContext.Provider>
  )
}

export default Context;
export {GreetContext};