import React, { useRef, useState } from 'react'

const UseRef = () => {
const prevCount =useRef(0);
const [count, setCount] =useState(0);

const inpRef = useRef();

const setFocus = () => {
    console.log(inpRef.current);
    inpRef.current.value="value changed";
    inpRef.current.focus();
}
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
        <input ref={inpRef} value="anand" type="text"/>
        <button onClick={setFocus}>Focus Input</button>
    </div>
  )
}

export default UseRef