import { useState } from "react";
import "./Input.css";
import { useDispatch } from "react-redux";
import * as actions from "./actions";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

import DeleteIcon from "@material-ui/icons/Delete";

const Input = (props) => {
  const id = Math.random().toString();
  const [title, setTitle] = useState();

  const dispatch = useDispatch();

  const [error, setError] = useState(false);

  const addTodo = (obj) => {
    dispatch(actions.add(obj));
  };

  const inputHandler = (event) => {
    if (event.target.value.length === 0) {
      setError(true);
      return;
    } else {
      setError(false);
      setTitle(event.target.value);
    }
  };

  const formHandler = (event) => {
    event.preventDefault();
    addTodo({ id, title });
    setTitle(" ");
  };

  return (
    <div>
      <h7>Add New Todo</h7>
      <form type="submit" onSubmit={formHandler} className="main">
        <input
          placeholder="Add new to do..."
          onChange={inputHandler}
          value={title}
        ></input>
        {error && <p id="error_txt">Enter valid title</p>}

        <Button
          variant="contained"
          color="primary"
          size="small"
          className={`delete__btn ${error ? "hidden__btn" : ""}`}
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
      </form>
    </div>
  );
};

export default Input;
