import React, { useEffect, useRef } from "react";
import { useParams } from "react-router";
import { getCurrentPost } from "../store/slices/PostSlice";
import { useDispatch, useSelector } from "react-redux";
import "./PostDetail.css";
import Comment from "../components/Comment";
import Star from "../components/Star";
import API from "../conf/@axios";

const PostDetail = () => {
  const commentRef = useRef(null);
  const params = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts.currentPost);
  const addComment = async () => {
    try {
      const request = await API.post("/addCommentToPost", {
        postId: params.id,
        star: null,
        content: commentRef.current,
      });
    } catch (err) {
      console.log("something went wrong", err);
    }
  };

  useEffect(async () => {
    const id = params.id;

    await dispatch(getCurrentPost(id));
  }, []);

  return (
    <div className="card">
      <div className="mainContainer">
        <img
          src={post.imageSource}
          style={{ width: "80%", height: "300px", marginBottom: "2%" }}
        />
        <div className="contentContainer">
          <h1>{post.title}</h1>
          <br />
          <div style={{ width: "600px" }}>
            <p>{post.content}</p>
          </div>
        </div>
      </div>
      <div>
        <h1 style={{ marginLeft: "20%" }}>Comments</h1>
        {post?.comments?.map((item) => (
          <Comment comment={item.comment} star={item.star} />
        ))}
      </div>
      <div style={{ height: "100%" }}>
        <p>Add comment</p>
        <input
          style={{ width: "50%" }}
          ref={commentRef}
          type="text"
          placeholder=" Enter your comment here!"
        ></input>
        <div>
          <Star starRate="1" />
          <Star starRate="2" />
          <Star starRate="3" />
          <Star starRate="4" />
          <Star starRate="5" />
        </div>
      </div>
      <button
        className="btn btn-primary"
        style={{ width: "200px" }}
        onClick={addComment}
      >
        Add Comment
      </button>
    </div>
  );
};

export default PostDetail;
