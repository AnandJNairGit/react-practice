import React, { useReducer } from "react";

const UseReducer = () => {
  const reducer = (state, action) => {
    console.log("inside reducer");
    switch (action.type) {
      case "increment":
        return { count: state.count + 1, showText: !state.showText };
        break;

      default:
        return state;
        break;
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
  return (
    <div style={{ margin: "50px" }}>
      <h1>UseReducer</h1>
      <h2>{state.count}</h2>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        Test UseReducer
      </button>
      {state.showText ? <h5>Toggle this text</h5> : ""}
    </div>
  );
};

export default UseReducer;
