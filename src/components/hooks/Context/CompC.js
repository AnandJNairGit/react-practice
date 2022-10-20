import React from "react";
import { ContextData } from ".";

const CompC = () => {
  return (
    <ContextData.Consumer>
      {(data) => {
                return (
                  <>
                    <h1>This is Component C</h1>
                    <h3>{data}</h3>
                  </>
                );
              }}
    </ContextData.Consumer>
  );
};

export default CompC;
