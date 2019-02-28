//npm install node-sass apollo-boost react-apollo graphql --save

// standard libs

// other libs
import React, { Component } from "react";

// standard components
import "./mdb/scss/App.scss";

// other components
//import "./App.scss";


// pages
import Homepage from "./components/pages/Homepage";

// Rendering of all active pages
class App extends Component {
  render() {
    return (
    <Homepage />
    );
  }
}

// Exporting of App (all active pages)
export default App;