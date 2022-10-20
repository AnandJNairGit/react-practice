import React, { createContext } from "react";
import CompA from "./CompA";
import { useState } from "react";

const ContextData = createContext();

const Contexts = () => {
  const [data, setData] = useState("initial Data");
  return (
    <ContextData.Provider value={{ data: data, setData: setData }}>
      <h1>CONTEXT API</h1>
      <CompA />
    </ContextData.Provider>
  );
};

export default Contexts;
export { ContextData };
