import { useState } from "react"


const Form = () => {

    const [formData,setFormData]=useState({
        name:'',
        email:'',
        password:''
    })
    const handleInput=(e)=>{

        const{name,value}=e.target;

        setFormData({...formData,[name]:value})

    }
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
    // const [name,setName]=useState('');
    // const [email,setEmail]=useState('');
    // const [password,setPassword]=useState('');

    // const handleName=(e)=>{
    //     setName(e.target.value)
    // }
    // const handleEmail=(e)=>{
    //     setEmail(e.target.value)
    // }

    // const handlePassword=(e)=>{
    //     setPassword(e.target.value)
    // }


  return (
    <>
    <form className="form" onSubmit={handleSubmit}>
        <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleInput}/>
        <br/>
        <p>{formData.name}</p>
        </label>
        <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleInput}/>
        <br/>
        <p>{formData.email}</p>
        </label>
        <label>
        password:
        <input type="password" name="password" value={formData.password} onChange={handleInput}/>
        <br/>
        <p>{formData.password}</p>
        </label>      
        <button type="submit">Submit</button>  
    </form>
    </>
  )
}

export default Form