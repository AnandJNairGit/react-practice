import React from "react";
import logo from "../..//assets/react-icon-small.png";

export default function NavBar() {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo-container">
          <img className="logo" src={logo} />
          <h6>ReactFacts</h6>
        </div>
        <h3>React-Course Project-1</h3>
      </div>
    </nav>
  );
}
