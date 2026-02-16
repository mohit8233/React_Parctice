import { useState } from 'react';
import './App.css';

const App = () => {

  const [count, setCount]  = useState(100);

  const reset = ()=>{
      setCount(100);
  }
  return (
    <>
        <div className="box">
          <h1>Number Counter</h1>
           <div className='count'>{count}</div>    
             <div className='button'>
              <button className='btn1' onClick={()=> setCount(count + 1)}>
                Add
              </button>
              <button className='btn2' onClick={reset}>Reset</button>
              <button className='btn' onClick={()=> setCount(count - 1)}>Mins</button>
             </div>
        </div>
    </>
  )
}

export default App