import React from "react";

function Title() {
  return <h1>Why I Love React</h1>;
}

export default function Main() {
  return (
    <>
      <Title />
      <ol>
        <li>
          It's a popular library, so I'll be able to fit in with the cool kids!
        </li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ol>
    </>
  );
}
