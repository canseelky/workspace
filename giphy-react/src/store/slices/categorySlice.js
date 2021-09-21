import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const categorySlice = createSlice({
  name: "categorySlice",
  initialState: { categoryGif: [] },
  reducers: {
    setCategoryGif(state, action) {
      state.categoryGif = action.payload;
    },
  },
});

const categoryAction = categorySlice.actions;

export const categoryGifHandler = (categoryName) => {
  return async (dispatch) => {
    const response = await axios({
      method: "GET",
      url: "http://api.giphy.com/v1/channels/search",
      params: {
        api_key: `${process.env.REACT_APP_API_KEY}`,
        q: categoryName,
      },
    });
    dispatch(categoryAction.setCategoryGif(response.data.data));
  };
};

export default categorySlice;
