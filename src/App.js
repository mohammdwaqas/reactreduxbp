import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Test from "./Test";
import { connect } from "react-redux";
import MaterialUI from "./material";
import SimpleModal from "./modal";
function mapStateToProps(state) {
  return {
    incCounter: state.IncrementCounter,
    decCounter: state.DecrementCounter
  };
}
class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">
      //       INCREMENT State: {this.props.incCounter}
      //     </h1>
      //     <h1 className="App-title">
      //       INCREMENT State: {this.props.decCounter}
      //     </h1>
      //   </header>
      //   <Test />
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      <div>
        {/* <SimpleModal /> */}
        <MaterialUI />
      </div>
    );
  }
}
export default connect(mapStateToProps)(App);
// export default App;
