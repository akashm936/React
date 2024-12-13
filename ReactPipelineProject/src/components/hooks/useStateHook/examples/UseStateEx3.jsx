import React, { useState } from 'react'

const UseStateEx3 = () => {
  
  const [changeBackground, setBackground] = useState(false);
  
    return (
    <div>
       
        <button onClick={()=>{
             setBackground(!changeBackground)
        }
        }>Click</button>

<h1 style={{
            backgroundColor : changeBackground? "Red" : "white"
        }}>Hello</h1>


    </div>
  )
}

export default UseStateEx3