import { createStore } from "redux";

const listReducer = (state = { todos: [] }, action) => {
  const type = action.type;
  const ADD = "add";
  const DELETE = "delete";

  switch (type) {
    case ADD:
      return {
        todos: [...state.todos, action.payload],
      };

    case DELETE:
      const todos = state.todos.filter((todo) => {
        return todo.id !== action.id;
      });
      return { todos };

    default:
      return state;
  }
};

const store = createStore(
  listReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
