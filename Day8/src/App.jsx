import  { useState } from 'react'
import { DECREMENT, INCREMENT } from './actionType';
import { store } from './Store';
import './App.css'

function App() {
     const data = store;
    //  console.log(data);
     
     
     const [value, setValue] = useState(0);

     function myAdd(){
             data.dispatch({ type : INCREMENT, payload : 1})
     }
       data.subscribe(()=>{
      setValue((prev)=> prev+1)
     })
     function mySub(){
               data.dispatch({type : DECREMENT, payload: 1})
     }

   

    

  return (
    <>
    <div className='box'>
       <h1>Count : {data.getState().count}</h1>
       <button onClick={myAdd}>+</button>
       <button onClick={mySub}>-</button>
      
    </div>
     <div className="w-64 h-[200px] rounded-full overflow-hidden border-4 border-orange-500 flex items-center justify-center">

  <img
    src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
    alt=""
    className="w-[300px] h-[100px] object-cover animate-spin-slow"
     />

</div>
    </>
  )
}

export default App