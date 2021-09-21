import * as actions from "../actions";

const idReducer = (state = { currentId: "" }, action) => {
  switch (action.type) {
    case actions.SET_CURRENT_NOTE_ID:
      console.log("sadfgfds");
      console.log("idReducer", action.currentId);
      return { currentId: action.currentId };

    default:
      return state;
  }
};

export default idReducer;
