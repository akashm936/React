import React from 'react'
import { useState } from 'react';

const UseStateEx2 = () => {


    const [count, setCount] = useState(0);
  return (
    <div>
        
    <h1>UseStateEx2</h1>
    <h1>{count}</h1>
    <button onClick={()=>{
         setCount(count+10);
         setCount((pre)=>pre+20);
         setCount((pre)=>pre+30);
    }}>Increment</button>
    </div>
  )
}

export default UseStateEx2