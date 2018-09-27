export default class CounterAction {
  static INCREMENT = "INCREMENT";
  static DECREMENT = "DECREMENT";
  static DECREMENT_FROM_STATE = "DECREMENT_FROM_STATE";
  static DECREMENT_WITH_VAL = "DECREMENT_WITH_VAL";

  static increment() {
    return { type: CounterAction.INCREMENT };
  }
  static decrement() {
    return { type: CounterAction.DECREMENT };
  }
  static decrementFromState(valueFromState) {
    return { type: CounterAction.DECREMENT_FROM_STATE, val: valueFromState };
  }
  static decrementWithVal(hardCodedValue) {
    return { type: CounterAction.DECREMENT_WITH_VAL, val: hardCodedValue };
  }
}
