import React, { useState } from 'react'
import './App.css'
const App = () => {

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
       
       <form action="" onSubmit={handleSubmit} className='form'>
        <input type="text" name='name' value={data.name} placeholder='userName' onChange={handleChange }/>
        <input type="text" name='email' value={data.email}  placeholder='email' onChange={handleChange}/>
        <input type="text" name='password' value={data.password}  placeholder='password' onChange={handleChange }/>
        <button className="btn">Subimt</button>
       </form>
    </>
  )
}

export default App