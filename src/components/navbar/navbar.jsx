import { useState } from 'react'

const Navbar = () => {
  const[count,setCount]=useState(0);
  const [message, setMessage] = useState("");
  const handleInc = () => {
    setCount(count + 1);
    setMessage("Incremented");
  };
  const handleDec = () => {
    if (count > 0) {
      setCount(count - 1);
      setMessage("Decremented");
    } else {
      setMessage("Cannot Decrement Below Zero");
    }
  };
  return (
    <>
    <div className='nav'>
        <h1>{count}</h1>
        <button onClick={handleInc}>+</button>
        <button onClick={handleDec}>-</button>
        <p>{message}</p>
    </div>
    </>
  )
}

export default Navbar