import React from "react";
import classes from "./Logo.module.css";
import { useHistory } from "react-router-dom";

const Logo = () => {
  const history = useHistory();
  return (
    <div
      className={classes.logo}
      onClick={() => {
        history.push("/");
      }}
    >
      <img src="https://media1.giphy.com/media/3o6gbbuLW76jkt8vIc/giphy.gif?cid=ecf05e47btugr3098tv5644nqczfwsfgpja23suw9e4s2yv1&rid=giphy.gif&ct=g" />
    </div>
  );
};

export default Logo;
