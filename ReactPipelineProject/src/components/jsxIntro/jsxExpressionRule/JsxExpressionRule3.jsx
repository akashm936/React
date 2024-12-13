import React from 'react'

//  we can not used all looping statement inside the jsx expression . we can used only the hof, but are also not useful ,only those hof are useful that can return the jsx 


// return statement only except only one statement 
// whatever you return that is in same line of return statement  if it not in same line  it not working
let JsxExpressionRule3 = () => {

    let student = ["atharv", "manish", "Akash", "Prakash", "mahesh"]
     // here we are dispalying/ fitering only those student that name ends with "h"
  return (
    <div>JsxExpressionRule3
    
    <p>that names of student is  {student.filter((element,i)=>{
        return element.endsWith("h") && (<div>{element} , </div>)
    })}</p>
    {/* --------------------------------------------------------- */}
    <p> the name of the student is {student.map((element,i) => {
        return <React.Fragment key={i}> {element}, </React.Fragment>
    })}</p>
     
    
    </div>
  )
}

export default JsxExpressionRule3