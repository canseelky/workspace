import { useDispatch, useSelector } from "react-redux";
import FormGroup from "react-bootstrap/FormGroup";
import * as actions from "../store/actions";

const Form = () => {
  const dispatch = useDispatch();

  const currentId = useSelector((state) => state.id.currentId);

  let notes = useSelector((state) => state.notes);
  notes = notes.notes;

  const title = useSelector((state) => state.title);

  const content = useSelector((state) => state.content);

  const note = notes.find((element) => element.id === currentId);

  const contentHandler = (e) => {
    let content = e.target.value;
    if (content === "") {
      const title = "";
      return;
    }
    dispatch(actions.updateContent(currentId, content));
    dispatch(actions.updateTitle(currentId, title));
  };

  const formHandler = (event) => {
    event.preventDefault();
    var today = Date.parse(new Date());

    const note = {
      id: Math.random().toString(),
      title,
      content,
      date: today,
    };
    dispatch(actions.addNote(note));
  };

  return (
    <div>
      <form type="submit" onSubmit={formHandler}>
        <label for="content"></label>
        <FormGroup name="content">
          <FormGroup
            as="textarea"
            onChange={contentHandler}
            value={note ? note.content : ""}
            rows={30}
            cols={180}
          />
        </FormGroup>
      </form>
    </div>
  );
};

export default Form;
