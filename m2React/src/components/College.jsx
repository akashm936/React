import React from 'react'

function College() {

    const mycollege = {
        name: "MSSCET",
        location: "JALNA"
    }

  return (
    <>
       <h1>My College Name is {mycollege.name}</h1>
       <h1>My College is In {mycollege.location} City</h1>

    </>
  )
}

export default College