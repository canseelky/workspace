import React from "react";
import "./PostItem.css";
import { useHistory } from "react-router-dom";
const PostItem = ({ title, content, tag, imageSource, id }) => {
  const history = useHistory();

  const redirectToPostDetail = (id) => {
    history.push(`/post-detail/${id}`);
  };

  return (
    <div className="card " style={{ width: "90%" }}>
      <div className="row justify-content-center">
        <div className="col-9">
          <h1>{title}</h1>
          <p>{content.slice(0, 100)}</p>
          <p className="tag">{tag}</p>
        </div>
        <div className="col" style={{ marginRight: "5%" }}>
          <img
            style={{
              width: "100%",
              height: "100%",
              marginTop: "20px",
            }}
            alt="image"
            src={imageSource}
          ></img>
        </div>
      </div>

      <div className="row">
        <button
          className="btn detailBtn"
          onClick={redirectToPostDetail.bind(null, id)}
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default PostItem;
