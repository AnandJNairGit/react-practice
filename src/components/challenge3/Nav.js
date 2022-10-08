import React from "react";

export default function Nav() {
    return (
      <nav style={{"display":"flex", "justifyContent":"space-between"}}>
        <img
          src="https://picsum.photos/id/237/200/300"
          width="40px"
        />
        <ul style={{ listStyle: "none", display: "flex", gap: "10px" }}>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }