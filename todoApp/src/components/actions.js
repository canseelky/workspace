export const add = (payload) => {
  return { type: "add", payload };
};

export const deleteItem = (id) => {
  return { type: "delete", id };
};
