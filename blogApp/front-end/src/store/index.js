import { configureStore } from "@reduxjs/toolkit";
import PostSlice from "./slices/PostSlice";
const store = configureStore({
  reducer: {
    posts: PostSlice.reducer,
  },
});

export default store;
