import React, { Component } from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";

class App extends Component {
  render() {
    return (
      <div>
        <Palette {...seedColors[1]}/>
      </div>
    );
  }
}

export default App;
