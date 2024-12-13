import React from 'react'

const ColorBox = (x) => {
  console.log(x);
  
    return (
   <div>
    <div style={{
        
        height : "200px",
        width: "200px",
        backgroundColor: x.color,
        
    }}>

    </div>
   </div>    
    


  )
}

export default ColorBox