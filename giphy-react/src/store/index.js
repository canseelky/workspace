import { applyMiddleware, compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import currentGifSlice from "./slices/currentGifSlice";
import gifSlice from "./slices/gifSlice";
import categorySlice from "./slices/categorySlice";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore(
  {
    reducer: {
      currentGif: currentGifSlice.reducer,
      gifs: gifSlice.reducer,
      category: categorySlice.reducer,
    },
  },
  composeEnhancers(applyMiddleware())
);

export default store;
