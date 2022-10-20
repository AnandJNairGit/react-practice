import React, { useContext, useRef } from "react";
import { ContextData } from ".";

const CompC = () => {

  const data = useContext(ContextData);
  const inputRef = useRef();
  const updateData = () => {
    data.setData(inputRef.current.value);
  };
  return (
    <>
    <hr />
    <h1>Inside component C, the data is :{data.data}</h1>
    <input type="text" ref={inputRef} />
    <button onClick={updateData}> updateData</button>
    <hr />
  </>
  );
};

export default CompC;
