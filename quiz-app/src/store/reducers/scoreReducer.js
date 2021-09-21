import * as Actions from "../actions";

const scoreReducer = (initalState = { score: 0 }, action) => {
  switch (action.type) {
    case Actions.SET_SCORE:
      return {
        score: initalState.score + 1,
      };

    default:
      return initalState;
  }
};

export default scoreReducer;
