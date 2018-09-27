function incrementCounter(state = 0, action) {
  switch (action.type) {
    // case "INCREMENT":
    //   return "We can't give you increment at that time, sorry !";
    case "DECREMENT":
      return "Yeah sure, we've approved your request. Thanks !";

    case "DECREMENT_FROM_STATE":
      return (
        "wow, amount " + action.val + " from state is accepted as donation!"
      );

    case "DECREMENT_WITH_VAL":
      return (
        "Hey Man, Much appreciated your donation of " +
        action.val +
        " Rupees. Thanks"
      );

    default:
      return state;
  }
}

export default incrementCounter;
