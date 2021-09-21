import { useState } from "react";
import Result from "./Result";
import styles from "./Button.module.css";
import Model from "./Model";

const Button = (props) => {
  const clickHandler = () => {
    props.getNumber(props.name);
  };

  return (
    <div className={styles.gridContainer}>
      <button
        className={styles.gridItem}
        name={props.name}
        onClick={clickHandler}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
