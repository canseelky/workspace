import { createStore, combineReducers } from "redux";
import questionReducer from "./reducers/questionReducer";
import scoreReducer from "./reducers/scoreReducer";
import userChoiceReducer from "./reducers/userChoiceReducer";

const reducer = combineReducers({
  questionReducer: questionReducer,
  scoreReducer: scoreReducer,
  userChoiceReducer: userChoiceReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
