import React from "react";

const Hello = () => {
  //   let hello = React.createElement("h1", "Hello, Amar!");
  return React.createElement(
    "div",
    {
      id: "hello",
      className: "dummyClass",
    },
    React.createElement("h1", null, "Hello, Amar!")
  );
  /* <div>
      <h1>Hello, World!</h1>
    </div> */
};

export default Hello;
