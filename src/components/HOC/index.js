import React from "react";
import Address from "./Address";
import User from "./User";

export const HOC = () => {
  return (
    <div style={{"display":"flex"}}>
      <User />
      <Address />
    </div>
  );
};
