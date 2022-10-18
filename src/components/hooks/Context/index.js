import React, { createContext } from "react";
import CompA from "./CompA";

const ContextData = createContext();
const ContextData1 = createContext();

const Contexts = () => {
  return (
    <ContextData.Provider value={"this is Context Data from provider"}>
      <ContextData1.Provider
        value={"this is context data from second provider"}
      >
        <CompA />
      </ContextData1.Provider>
    </ContextData.Provider>
  );
};

export default Contexts;
export { ContextData };
