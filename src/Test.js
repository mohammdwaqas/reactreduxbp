import React, { Component } from "react";
import { connect } from "react-redux";
import CounterAction from "./store/actions/counter";

function mapState(state) {
  return {
    IncCounter: state.IncrementCounter,
    DecCounter: state.DecrementCounter
  };
}

function mapDispatch(dispatch) {
  return {
    increment: () => dispatch(CounterAction.increment()),
    decrement: () => dispatch(CounterAction.decrement()),
    decrementWithVal: () => dispatch(CounterAction.decrementWithVal(50)),
    decrementFromState: amount =>
      dispatch(CounterAction.decrementFromState(amount))
  };
}
class Test extends Component {
  constructor() {
    super();
    this.state = {
      donationAmount: 25
    };
  }
  render() {
    return (
      <div>
        <h2>Test Component</h2>
        <button onClick={this.props.increment}>Increment</button>
        <button onClick={this.props.decrement}>Decrement</button>
        <button onClick={this.props.decrementWithVal}>Donate 5 Rupees</button>

        <button
          onClick={() =>
            this.props.decrementFromState(this.state.donationAmount)
          }
        >
          Decrement from State
        </button>
        <h3>DECREMENT STATE: {this.props.DecCounter}</h3>
        <h3>
          INCREMENT STATE
          {this.props.IncCounter}
        </h3>
      </div>
    );
  }
}

export default connect(
  mapState,
  mapDispatch
)(Test);
