// standard libs

// other libs
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// standard components
import App from "./App";

// Test if rendering properly
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
