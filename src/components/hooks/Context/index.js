import React, { createContext } from "react";
import CompA from "./CompA";

const ContextData = createContext();
const Contexts = () => {

  return (
    <ContextData.Provider value={"this is Context Data from provider"}>
      <CompA />
    </ContextData.Provider>
  );
};

export default Contexts;
export {ContextData}; 
