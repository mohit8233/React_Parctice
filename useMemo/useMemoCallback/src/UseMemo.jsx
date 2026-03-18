import React, { useMemo, useState } from 'react'

const UseMemo = () => {
  const [num, setNum] = useState(0);
  const [theme, setTheme] = useState("light")

  function handleTheme(){
    setTheme(prev =>(prev === "light"? "dark": "light"))
  }
const square = useMemo(() => {
    const n = Number(num);
    return n * n; 
  }, [num]);

  return (
    <>
    <div className="min-h-screen flex items-center justify-center">
  
  <div className="w-[500px] h-[300px] border flex flex-col items-center justify-center gap-2 bg-gray-700">
    
    <input
      type="text"
      value={num}
      placeholder="enter factorial num"
      onChange={(e) => setNum(e.target.value)}
      className="border-2 p-1"
    />

    <p className="text-center text-white">
      this is {num} of square is {square}
    </p>
    <button onClick={handleTheme} className='text-white bg-blue-400 p-2' >change the theme </button>
      <p className='text-white'>this is theme here {theme} </p>
    
  </div>
 
</div>
       
    </>
  )
}

export default UseMemo