import Input from "./Input";
import ListItem from "./ListItem";
import { useSelector, useDispatch } from "react-redux";

import "./Todos.css";

const Todos = () => {
  const toDoList = useSelector((state) => state.todos);

  return (
    <div className="mainContainer">
      <h1>Todo List</h1>
      <Input name="inputTitle"></Input>
      {toDoList.map((element) => (
        <ListItem
          name={element.title}
          key={element.id}
          id={element.id}
        ></ListItem>
      ))}
    </div>
  );
};

export default Todos;
