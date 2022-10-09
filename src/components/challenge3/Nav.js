import React from "react";
import img from "../../assets/react-icon-small.png";

export default function Nav() {
    return (
      <nav style={{"display":"flex", "justifyContent":"space-between"}}>
        <img
          src= {img}
          width="40px"
          height="40px"
        />
        <ul style={{ listStyle: "none", display: "flex", gap: "10px" }}>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }