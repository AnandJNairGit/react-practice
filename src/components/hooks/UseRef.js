import React, { useRef, useState } from 'react'

const UseRef = () => {
const prevCount =useRef(0);
const [count, setCount] =useState(0);
const increment = () => {
    prevCount.current = count;
    console.log(prevCount.current);
    setCount(count+1) ;
}
  return (
    <div>
        <h1>UseRef</h1>
        <h4>Count is : {count}</h4>
        <h5>Previous Count is: {prevCount.current}</h5>
        <button onClick={increment}>Count Button</button>
        <hr />
        <input type="text"/>
        <button>Focus Input</button>
    </div>
  )
}

export default UseRef