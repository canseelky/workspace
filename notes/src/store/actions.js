export const ADD_NOTE = "add";
export const DELETE_NOTE = "delete";
export const SET_CURRENT_NOTE_ID = "setCurrentNoteId";
export const UPDATE_NOTE = "updateNote";
export const UPDATE_TITLE = "updateTitle";
export const UPDATE_CONTENT = "updateContent";

export const addNote = (payload) => {
  return { type: ADD_NOTE, payload };
};

export const deleteNote = (id) => {
  console.log("actions--delete id", id);
  return { type: DELETE_NOTE, id };
};

export const setCurrentNoteId = (currentId) => {
  return { type: SET_CURRENT_NOTE_ID, currentId };
};

export const upDateNote = (currentId, content) => {
  return { type: UPDATE_NOTE, currentId, content };
};

export const updateTitle = (currentId, title) => {
  return { type: UPDATE_TITLE, currentId, title };
};

export const updateContent = (currentId, content) => {
  return { type: UPDATE_CONTENT, currentId, content };
};
