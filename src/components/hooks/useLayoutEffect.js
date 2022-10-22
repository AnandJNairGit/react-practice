import React, { useEffect, useLayoutEffect, useState } from "react";

const UseLayoutEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("inside use effect 1");
  });

  useLayoutEffect(() => {
    console.log("inside layout effect");
  });

  useEffect(() => {
    console.log("inside use effect 2");
  });

  useLayoutEffect(() => {
    for (let index = 0; index < 1000000000; index++) {
      if (index == 1000000000 - 1) {
        if (count == 0) {
          setCount(534534);
        }
      }
    }
  }, [count]);

  const handleChange = () => {};

  return (
    <>
      <h1>useLayoutEffect</h1>
      <h3>{count}</h3>
      <button
        onChange={() => {
          setCount(0);
        }}
      >
        Click Me
      </button>
    </>
  );
};

export default UseLayoutEffect;
