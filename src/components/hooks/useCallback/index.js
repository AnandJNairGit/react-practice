import React, { useState } from "react";
import List from "./List";

const UseCallback = () => {
  const [number, setNumber] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);

  const onChange = (event) => {
    const num = parseInt(event.target.value);
    setNumber(num);
  };
  const theme = {
    background: darkTheme ? "black" : "white",
    color: !darkTheme ? "black" : "white",
  };

  const getItems = () => {
    return [number, number + 1, number + 2];
  };
  return (
    <div
      style={{
        margin: "50px",
        background: theme.background,
        color: theme.color,
      }}
    >
      <input type="text" onChange={onChange} />
      <List getItems={getItems} />
      <button onClick={()=>{setDarkTheme(!darkTheme)}}>Change theme</button>
    </div>
  );
};

export default UseCallback;
