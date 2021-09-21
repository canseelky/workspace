import * as Actions from "../actions";
const userChoiceReducer = (
  initialState = { userAnswered: false, userAnswer: "" },
  action
) => {
  switch (action.type) {
    case Actions.SET_USER_ANSWERED:
      return {
        ...initialState,
        userAnswered: action.payload,
      };

    case Actions.SET_USER_ANSWER:
      return {
        ...initialState,
        userAnswer: action.payload,
      };

    default:
      return initialState;
  }
};

export default userChoiceReducer;
