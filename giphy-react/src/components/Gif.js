import React from "react";
import classes from "./Gif.module.css";

const Gif = ({ source, onClick }) => {
  return (
    <div className={classes.gif} onClick={onClick}>
      {<img src={source} alt="loading..." />}
    </div>
  );
};

export default Gif;
