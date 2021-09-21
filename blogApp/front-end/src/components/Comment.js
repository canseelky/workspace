import React from "react";
import { AiFillStar } from "react-icons/ai";

const Comment = ({ star, comment }) => {
  const arr = new Array(star).fill().map((value, index) => index);
  console.log(arr);

  return (
    <div className="card" style={{ width: "60%", marginLeft: "20%" }}>
      <div>
        <p>{comment}</p>
        <div>
          {arr.map((element, idx) => (
            <AiFillStar color="#B7DD29" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comment;
