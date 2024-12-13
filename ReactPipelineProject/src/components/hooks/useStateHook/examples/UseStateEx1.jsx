import { useState } from "react";

let UseStateEx1 =()=>{

    let [state, setState] = useState(0)
    return(
        <div>
{/*             
              let UseStateEx1 = () => {
              let useMyState = (a) => {
               let setMyState = (a) => { 
               //? modify state 
               };
               return [ a, setMyState];
              };
              let [state, setState] =  useMyState(0);
              console.log(State);
              }
            
             */}
             {/* <h1>Hello Akash This is UseStateEx1</h1>
            <h1>Count : {state}</h1>
             <button onClick={()=>{setState(state+1)}}>Increment</button>  */}

             <h1>Hello Akash Good Morning</h1>
        </div>

    )
}

export default UseStateEx1;

