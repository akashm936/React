import React from 'react'

const Child = (x) => {
    console.log(x);
    const {name,mobile,qualification} = x.data

  return (
    <div>
        
        {x.data.name}
        {/* {mobile} */}
    </div>
  )
}

export default Child