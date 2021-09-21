import * as Actions from "../actions";
const questionReducer = (state = { currentQuestionIndex: 0 }, action) => {
  switch (action.type) {
    case Actions.SET_CURRENT_QUESTION:
    case state.currentQuestionIndex < action.payload - 1:
      return {
        currentQuestionIndex: state.currentQuestionIndex + 1,
      };

    default:
      return state;
  }
};

export default questionReducer;
