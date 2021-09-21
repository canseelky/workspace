import { configureStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import languageSlice from "./slices/languageSlice";
import { composeWithDevTools } from "redux-devtools-extension";

// if (__DEV__) {
//   composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// }

const store = configureStore(
  {
    reducer: languageSlice.reducer,
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
