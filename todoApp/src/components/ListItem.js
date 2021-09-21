import "./ListItem.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "./actions";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const ListItem = ({ name, id }) => {
  const itemId = id;
  const deleteHandler = () => {
    deleteTodo(itemId);
  };
  const [ischecked, setChecked] = useState(false);

  const dispatch = useDispatch();

  const handleChange = () => {
    setChecked((checked) => !checked);
  };

  const deleteTodo = (obj) => {
    dispatch(actions.deleteItem(obj));
  };

  return (
    <div>
      <div className="mainItem">
        <input id="check" type="checkbox" onChange={handleChange} />
        <p className={` ${!ischecked ? "" : "checkedText"}`}>{name}</p>

        <Button
          onClick={deleteHandler}
          variant="contained"
          color="secondary"
          size="small"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ListItem;
