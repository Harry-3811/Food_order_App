import React from "react";
import ReactDOM from "react-dom/client";

// JSX => Babel transpiles it to  React.createElement => ReactElement -JS Object => HTMLElement(render)

//React Element
const Heading = () => {
  return (
    <h1 id="heading" tabIndex={1}>
      Namaste React using JSX
    </h1>
  );
};

//React Functional Component
const HeadingComponent = () => (
  <div id="container">
    <Heading />
    <h1>Namaste React Functional Component</h1>;
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
