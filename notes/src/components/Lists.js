import { useSelector } from "react-redux";
import ListItem from "./ListItem";
import "./Lists.css";
const Lists = () => {
  let notes = useSelector((state) => state.notes.notes);

  const currId = useSelector((state) => state.id.currentId);

  return (
    <div className={"list__container"}>
      {notes.map((element) => (
        <ListItem
          id={element.id}
          title={element.title}
          content={element.content}
          date={element.date}
        ></ListItem>
      ))}
    </div>
  );
};

export default Lists;
