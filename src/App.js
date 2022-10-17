import React from "react";
import { HOC } from "./components/HOC";
import Hooks from "./components/hooks";
// import Challenge from "./components/challenge3";
// import Challenge from "./components/challenge5";
// import ReactForms from "./components/reactForms";
import UseEffect from "./components/useEffect";

function App() {
  function Footer() {
    return <footer>© 2022 react development. All rights reserved. </footer>;
  }

  return (
    // challenge 3
    <>
          {/* <Challenge /> */}
          {/* <ReactForms /> */}
          {/* <UseEffect /> */}
          {/* <HOC /> */}
          <Hooks />
    </>
  );
}

export default App;
