import React, { useState } from "react";
import useLocalStorage from "./useLocalStorage";

const CustomHook = () => {
  const [value, setValue] = useLocalStorage("inpt", "");
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      />
    </div>
  );
};

export default CustomHook;
