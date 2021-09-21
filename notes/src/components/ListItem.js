import "./ListItem.css";
import { useDispatch } from "react-redux";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import * as actions from "../store/actions";

const ListItem = ({ content, id, date }) => {
  const dispatch = useDispatch();
  const clickHandler = (id) => {
    dispatch(actions.setCurrentNoteId(id));
  };

  return (
    <>
      <div className="list__item" onClick={clickHandler.bind(null, id)}>
        <h6 className="title">{content ? content.slice(0, 12) + "..." : ""}</h6>

        <div>
          <EventAvailableIcon className={"align__items"} />

          <p>{date}</p>
        </div>
      </div>
      <hr />
    </>
  );
};
export default ListItem;
