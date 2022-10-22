import React, { useEffect, useLayoutEffect } from "react";

const UseLayoutEffect = () => {
  useEffect(() => {
    console.log("inside use effect 1");
  });

  useLayoutEffect(() => {
    console.log("inside layout effect");
  });

  useEffect(() => {
    console.log("inside use effect 2");
  });

  return (
    <>
      <h1>useLayoutEffect</h1>  
    </>
  );
};

export default UseLayoutEffect;
