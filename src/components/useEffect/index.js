import React, { useEffect, useState } from "react";



export default function UseEffect() {
const [count, setCount] = useState(1);

useEffect(()=>{
    console.log("inside use effect");
});
  return (
    <div>
        <h1>{count}</h1>
      <button>Run</button>
    </div>
  );
}
