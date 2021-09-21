import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../store/slices/PostSlice";
import PostItem from "../components/PostItem";
import { useSelector } from "react-redux";
const Posts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.posts.isLoading);
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "20px",
      }}
    >
      {isLoading && <p>Loading...</p>}
      {!isLoading &&
        posts.map((post) => (
          <PostItem
            title={post.title}
            content={post.content}
            tag={post.tag}
            imageSource={post.imageSource}
            id={post.id}
          />
        ))}
    </div>
  );
};

export default Posts;
