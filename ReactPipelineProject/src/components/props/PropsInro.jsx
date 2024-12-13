import React, { useState } from "react";
import Child from "./Child";
import CounterProps from "./CounterProps";
import ColorBox from "./ColorBox";

const PropsInro = () => {
  const obj = {
    name: "Akash",
    mobile: 89560,
    qualifiction: "B.Tech",
  };

  const [count, setCount] = useState(0);

  let updateCounter = () => {
    setCount(count + 1);
  };

  // console.log(count);

  return (
    <div>
      {/* <Child name="Mahesh" mobile="87934" /> */}
      {/* <Child data={updateCounter}/> */}
      {/* <h1>count : {count}</h1> 
        <CounterProps data={updateCounter}/> */}

      <ColorBox color="red" />
      <ColorBox color="green" />
      <ColorBox color="blue" />
    </div>
  );
};

export default PropsInro;
