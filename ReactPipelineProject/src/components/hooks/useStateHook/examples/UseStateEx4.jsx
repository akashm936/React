import React, { useState } from "react";

const UseStateEx4 = () => {
  const [radius, setRadius] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setRadius(!radius);
          console.log("Click");
        }}
      >
        Click
      </button>

      <div
        style={{
          width: 100,
          height: 100,
          backgroundColor: "black",
          margin: 30,
          borderRadius:  radius? '50%': '0%',
          textAlign: "center",
          color: 'white'
        }}
      >
        box1
      </div>
    </div>
  );
};

export default UseStateEx4;
