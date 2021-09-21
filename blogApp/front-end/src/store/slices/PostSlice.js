import { createSlice } from "@reduxjs/toolkit";
import API from "../../conf/@axios";
const initialState = {
  posts: [],
  errors: [],
  currentPost: {},
  isLoading: false,
};
const PostSlice = createSlice({
  name: "PostSlice",
  initialState,
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
    setCurrentPost(state, action) {
      state.currentPost = action.payload;
    },
    setErrors(state, action) {
      state.errors = action.payload;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const getPosts = () => {
  return async (dispatch) => {
    try {
      dispatch(PostActions.setLoading(true));
      const response = await API.get("/posts");
      dispatch(PostActions.setPosts(response.data));
    } catch (err) {
      PostActions.setErrors(err);
    }
    dispatch(PostActions.setLoading(false));
  };
};

export const getCurrentPost = (id) => {
  return async (dispatch) => {
    try {
      const response = await API.get("/findpost", {
        params: { id: id },
      });
      dispatch(PostActions.setCurrentPost(response.data));
    } catch (err) {
      dispatch(PostActions.setErrors(err));
    }
  };
};

export const PostActions = PostSlice.actions;
export default PostSlice;
