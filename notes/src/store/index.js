import { createStore, combineReducers } from "redux";
import notesReducer from "./reducers/notesReducer";
import idReducer from "./reducers/idReducer";

const reducer = combineReducers({
  notes: notesReducer,
  id: idReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
