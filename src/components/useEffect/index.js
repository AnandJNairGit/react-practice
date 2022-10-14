import React, { useEffect, useState } from "react";



export default function UseEffect() {
const [count, setCount] = useState(1);
const [newCount, setNewCount] = useState(1);

useEffect(()=>{
    console.log("inside use effect");
},[]);
  return (
    <div>
        <h1>{count}</h1>
      <button onClick={()=>{setCount(count+1)}}>Run 1</button>
      <h1>{newCount}</h1>
      <button onClick={()=>{setNewCount(newCount+1)}}>Run 2</button>
    </div>
  );
}
