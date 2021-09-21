import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = { gif: [] };
const gifSlice = createSlice({
  name: "gifSlice",
  initialState,
  reducers: {
    setResult(state, action) {
      state.gif = action.payload;
    },
  },
});

const actions = gifSlice.actions;
export const getTrending = () => {
  return async (dispatch) => {
    try {
      const data = await axios({
        method: "GET",
        url: "http://api.giphy.com/v1/gifs/trending",
        params: { api_key: `${process.env.REACT_APP_API_KEY}` },
      });

      dispatch(actions.setResult(data.data.data));
    } catch (err) {
      console.log("gifSlice", err);
    }
  };
};

export const getSearchResult = (searchTerm) => {
  return async (dispatch) => {
    try {
      const data = await axios({
        method: "GET",
        url: "http://api.giphy.com/v1/gifs/search",
        params: {
          api_key: `${process.env.REACT_APP_API_KEY}`,
          q: searchTerm,
        },
      });

      dispatch(actions.setResult(data.data.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export default gifSlice;
