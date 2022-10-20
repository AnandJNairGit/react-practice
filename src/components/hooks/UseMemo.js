import React, { useState } from "react";

const UseMemo = () => {
  const [counter, setCounter] = useState(0);

  const count = getCount(counter);
  return (
    <>
      <h2>The Count is :{count}</h2>
      <button
        onClick={() => {
          setCounter(count + 1);
        }}
      >
        Increase count
      </button>
    </>
  );
};


const getCount = (counter) => {
  for (let index = 0; index <= 1000000000; index++) {
    // console.log("h");}
  }
  return (counter*2)/2;
};

export default UseMemo;
