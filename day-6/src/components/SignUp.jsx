import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './User.css'

const SignUp = () => {

      const student = {
        name : "",
        email :"",
        password : ""
      }
    const [data, setData] = useState(student)
     
    function handleChange(e){
        const {name, value} = e.target

        setData({
          ...data,
          [name] : value
        })
    }

  function handleSubmit(e){
     e.preventDefault()
    //  console.log(data);
     localStorage.setItem("User", JSON.stringify(data))
     
     
  }
  return (
    <>
        <div className='container'>
          <div className='box'><img src="https://www.pngall.com/wp-content/uploads/15/Login-PNG-HD-Image.png" alt="" /></div>
           <form action="" onSubmit={handleSubmit} className='form'>
               <h1 className='heading'>Welcome to Shopnexa</h1>

        <input type="text" name='name' value={data.name} placeholder='userName' onChange={handleChange }/>
        <input type="text" name='email' value={data.email}  placeholder='email' onChange={handleChange}/>
        <input type="text" name='password' value={data.password}  placeholder='password' onChange={handleChange }/>
        <button className="btn">Subimt</button>
       </form>
          <p>
        <Link to="/"> Login</Link>
      </p>
        </div>
      
    </>
  )
}

export default SignUp