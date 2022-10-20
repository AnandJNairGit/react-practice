import React, { useState } from 'react'

const UseMemo = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h2>The Count is :{counter}</h2>
      <button onClick={()=>{setCounter(counter+1);}}>Increase count</button>
    </>
  )
}

export default UseMemo;