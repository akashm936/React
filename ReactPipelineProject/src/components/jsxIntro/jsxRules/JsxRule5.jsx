// Rule No 5
//   -> In the JSX we used Fragment
//   -> if we dont want  to craete a unecessary node we write a 
   //  There are three type of Fragment 
    // ->  <></> Empty Fragment 
   //   -> or <React.Fragment> </React.Fragment>
    //  -> or <Fragment> </Fragment>


import React from 'react'


function JsxRule5() {
  return (
    <div>JsxRule5
    <h1>This Third Rule of JSX</h1>
    <p>Rule No 5</p>
    <p>   In the JSX we used Fragment</p>

    <p>  There are three type of Fragment </p>
    <p> <></> Empty Fragment  </p>
     <p>  or React.Fragment React.Fragment</p>
    <p> or Fragment Fragment </p>

    </div>
  )
}

export default JsxRule5