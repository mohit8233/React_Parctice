

import './App.css'
import  { useState } from 'react'

const App = () => {
     
      const [name, setName ] = useState("")
      const [password, setPassword ] = useState("")
      const [email, setEmail ] = useState("")
       const [message, setMessage] = useState("")

      function handleSubmit(e){
        e.preventDefault()
         let data = {
            name : name,
            password : password,
            email : email

         }
        


         const isConfirm = window.confirm("Are you sure you want to save the data?")
         if(isConfirm){
            localStorage.setItem("student",JSON.stringify(data))
           setMessage("Data saved successfully")
            //  console.log(data);
         }
         
          setTimeout(() => {
      setMessage("")
        }, 3000)
        
      }

      

  return (

    
    <div className='formBox'>
   
        <form action="" onSubmit={handleSubmit} className='form'>
          <input type="text"  placeholder='username' onChange={(e) => setName(e.target.value)}/>
          <input type="email"  placeholder='Email '  onChange={(e) => setEmail(e.target.value)}/>
          <input type="text"  placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
          <button >submit</button>
        </form>
         
      {message && (
        <p style={{ marginTop: "15px", color: "green", fontWeight: "bold" }}>
          {message}
        </p>
      )}
    </div>
  )
}

export default App