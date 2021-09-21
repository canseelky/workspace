import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
  name: "language",
  initialState: { language: "turkish" },
  reducers: {
    setLanguage(state, action) {
      state.language = action.payload;
    },
  },
});

export const getDeviceLanguage = (lang) => {
  return (dispatch) => {
    dispatch(langSlice.actions.setLanguage(lang));
  };
};

export const langActions = langSlice.actions;
export default langSlice;
