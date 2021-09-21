import "./Note.css";
import Lists from "./Lists";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch } from "react-redux";
import * as actions from "../store/actions";
import Form from "./Form";

const Note = () => {
  const dispatch = useDispatch();

  const clickDeleteHandler = (currentNoteId) => {
    dispatch(actions.deleteNote(currentNoteId));
  };

  const newNoteHandler = () => {
    const emtpyNote = { id: Math.random().toString(), content: "", title: "" };
    dispatch(actions.addNote(emtpyNote));
  };

  return (
    <div>
      <h1>Notes</h1>
      <div className={"header"}>
        <DeleteIcon className={"icon__cursor"} onClick={clickDeleteHandler} />
        <AddIcon
          className={"icon__right icon__cursor"}
          onClick={newNoteHandler}
        />
      </div>
      <div className={"note-container"}>
        <Lists clickDeleteHandler={clickDeleteHandler} />
        <Form />
      </div>
    </div>
  );
};

export default Note;
