import style from "./Operation.module.css";

const Operation = (props) => {
  const clickHandler = () => {
    if (["*", "-", "+", "=", "/"].includes(props.children)) {
      console.log("ın click handler");
      props.getOperation(props.children);
    }
  };

  return (
    <button
      name={props.children}
      className={style.gridItem}
      onClick={clickHandler}
    >
      {props.children}
    </button>
  );
};

export default Operation;
