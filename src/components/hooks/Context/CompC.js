import React from "react";
import { ContextData, ContextData1 } from ".";

const CompC = () => {
  return (
    <ContextData.Consumer>
      {(data) => {
        return (
          <>
            <ContextData1.Consumer>
              {(data1) => {
                return (
                  <>
                    <h1>This is Component C</h1>
                    <h3>{data}</h3>
                    <h4>{data1}</h4>
                  </>
                );
              }}
            </ContextData1.Consumer>
          </>
        );
      }}
    </ContextData.Consumer>
  );
};

export default CompC;
