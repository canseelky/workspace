import { createSlice } from "@reduxjs/toolkit";
const initialState = { gif: {} };
const currentGifSlice = createSlice({
  name: "currentGifSlice",
  initialState,
  reducers: {
    setCurrentGif(state, action) {
      state.gif = action.payload;
    },
  },
});

export default currentGifSlice;

export const gifAction = currentGifSlice.actions;
