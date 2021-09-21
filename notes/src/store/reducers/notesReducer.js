import * as actions from "../actions";

const dummyNotes = [
  {
    id: Math.random().toString(),
    title: "Lorem ipsum do....",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    date: "07/07/09",
  },
  {
    id: Math.random().toString(),
    title: "title2",
    content: "yyyyyyy yyyyy yyyy yyy",
    date: "07/07/09",
  },
];
const notes = dummyNotes;
const initialState = { notes, currentId: "" };
const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_NOTE:
      return {
        currentId: state.currentId,
        notes: [...state.notes, action.payload],
      };

    case actions.DELETE_NOTE:
      const notes = state.notes.filter((note) => {
        console.log("actionID", action.id);
        console.log("noteId", note.id);
        return note.id !== action.id;
      });

      return { ...state, notes };

    case actions.UPDATE_NOTE:
      const getCurrNote = state.notes.find((note) => {
        return note.id === action.currentId;
      });

      const note = getCurrNote[0];
      note.content = action.content;
      return state;

    case actions.UPDATE_CONTENT:
      const localNotes = [...state.notes];
      let currentNote = localNotes.find((note) => {
        return note.id === action.currentId;
      });

      currentNote.content = action.content;
      currentNote.title = action.title;
      const index = localNotes.indexOf(currentNote);
      localNotes[index] = currentNote;
      return { ...state, notes: localNotes };

    case actions.UPDATE_TITLE:
      const localNotes2 = [...state.notes];
      let currentNote2 = localNotes2.find((note) => {
        return note.id === action.currentId;
      });

      currentNote2.title = action.title;
      const index2 = localNotes2.indexOf(currentNote2);
      localNotes2[index2] = currentNote2;
      return { ...state, notes: localNotes2 };

    default:
      return state;
  }
};

export default notesReducer;
