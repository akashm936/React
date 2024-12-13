import React from 'react'


// we can not write conditional statement inside jsx expression except ternary operator and short circit operator
let username = "xyz"
let password = "123"


function JsxExpressionRule2() {

// let mode = "Dark"
// let api = [6,9] //{}

  return (
    <>
        <h1>JsxExpressionRule2</h1>
        {/* this is the && opertor that execute if the condition true  if condition is not true it was not execute */}
        {username=="xyz" && password=="123" && "Welcome user" || "Wrong Credintials"}
      {/* // short circuit operator && */}
      {/* ------------------------------------ */}
      {/* short circuit operator &&  operator . 
      if first statement is true the only second statment will checked */}
      {/* ----------------------------------------------------- */}
       {/* <h1>{Array.isArray(api) && api.map((val)=>{
        console.log(val)})}
        </h1>  */}
      {/* ---------------------------------------------------- */}

        {/* // condition  statemnetn are  allowed inside jsx expression */}

        {/* mode=="dark?<p>light</p>:<p>Dark</p>" */}
        {

         //! if/ else condition are not allowed inside jsx expression

            /* <h1>{if(if mode=='dark'){
        console.log("light")}
            else{
                console.log("Dark")
            }
        }</h1> */}
    </>
  )
}

export default JsxExpressionRule2