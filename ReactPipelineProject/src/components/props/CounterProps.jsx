import React from 'react'

const CounterProps = (x) => {
    
    console.log(x);
    
  return (

    <button onClick={()=>{x.data()}}>Click</button>
  )
}

export default CounterProps