import React, { useEffect } from "react";



export default function UseEffect() {

useEffect(()=>{
    console.log("inside use effect");
});
  return (
    <div>
      <button>Run</button>
    </div>
  );
}
