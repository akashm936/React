// Rule No 3
//   ->  In The JSX Every Tag should be Closed
//   -> JSX will throw ERROR if TAG is not closed


import React from 'react'


function JsxRule3() {
  return (
    <div>JsxRule3
    <h1>This Third Rule of JSX</h1>
    <p>Rule No 3</p>
    <p>   In The JSX Every Tag Should be Closed</p>

    <p> JSX will throw ERROR if TAG is not closed</p>
    </div>
  )
}

export default JsxRule3