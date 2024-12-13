import React, { Component, useState } from "react";

// render method is used to display the content on Ui/ browser
// and during rendering multiple inbuit process is happen like transpilation ,
// Red (!)
// Blue (?)
// Green (*)
// Yellow (^)
// Pink (&)
// Purple (~)
// Mustard (todo)
// Grey (//)
// diffing , and recounsalation and everything
class ClassBasedComEx1 extends Component {
  // state = {
  //     count : 0
  // }

  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    return <>
        <h1>ClassBasedComEx1</h1>
        <h1>Count : {this.state.count}</h1>
        <button
        onClick={()=>{
            this.setState({ count: this.state.count + 1});
            console.log(this.state);
        }}
        >Increment</button>
    
    </>;
  }
}

export default ClassBasedComEx1;



//class based components are the component that are created using classes 


//! CBC
//? CBC is one of the treditional way to create the Component in react
//? it is important to understand differences between the class based component and function based component

// class base
// 1)we will used to classes for creating the classes
// 2) extends Components
// 3)  class based Component has constructor and then we will have to super call statement
// 4) we must used render method inside that we will have return statement 
// 5) class based components is a stateful components means that it has in build state and to manage the state we have in build method call setState.
// 6)  we can not used hook inside class based  components 
// 7) we have inbuild life cycle method in class based components ex. Constructor, render , getDerivedStateFromProps() , ComponentDidMount() 


// function base components
// 1) will used function for creating the function based component
// 2) doest not extends the Componentents
// 3) function based component doest not have the constructor and super call statement 
// 4) function based components doest not requied the render method it will return the jsx Element to the parent Element not to the caller 

// 5) function base components are stateless components means that it doest not have ists own state and setState method. if we want to have state in function based components we have to used some exstra hooks ex useState hooks 


// 6) we can used hook inside function based components 

// 7) function based components doest not have any in build method for managing lifeCycle so to achived life cycle method in functin based components we have to used hook called as useEffect() hook 


