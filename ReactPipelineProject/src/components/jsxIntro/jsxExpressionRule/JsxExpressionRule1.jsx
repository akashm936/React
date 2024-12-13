import React from 'react'

function JsxExpressionRule1() {
  return (
    <div>
    <h1>JsxExpressionRule1</h1>
    <p>Rule no 1</p>
     <p>we should not write console statement inside jsx expression. </p>
     <p> becouse it will not get displayed on ui/ Browser</p>
     
     {/* <div>{console.log("Hello World")}</div>*/}
    </div>
  )
}

export default JsxExpressionRule1