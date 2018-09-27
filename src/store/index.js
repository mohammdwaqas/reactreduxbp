import { createStore, combineReducers } from "redux";
import DecrementCounter from "./reducers/decrement";
import IncrementCounter from "./reducers/increment";

export const RootReducer = combineReducers({
  DecrementCounter,
  IncrementCounter
});
let store = createStore(RootReducer);

export default store;
