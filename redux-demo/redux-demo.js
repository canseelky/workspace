const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

const store = redux.createStore(counterReducer);

const counterSubscription = () => {
  const latestStates = store.getState();
  console.log(latestStates);
};

store.subscribe(counterSubscription);

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
