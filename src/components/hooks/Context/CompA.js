import React, { useContext } from "react";
import { ContextData } from ".";
import CompB from "./CompB";

const CompA = () => {
  const data = useContext(ContextData);
  return (
    <>
      <h2>Inside component A, data is: {data.data }</h2>
      <CompB />
    </>
  );
};

export default CompA;
