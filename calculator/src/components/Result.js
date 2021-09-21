import styles from "./Result.module.css";

const Result = (props) => {
  return (
    <div className={styles.result}>
      <h6>Result</h6>
      <p>{props.children}</p>
    </div>
  );
};

export default Result;
