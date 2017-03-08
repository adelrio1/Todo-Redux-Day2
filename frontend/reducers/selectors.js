export const allTodos = (state) => {
  let todoIDs = Object.keys(state.todos);
  return todoIDs.map( (id) => {
    return state.todos[id];
  });
};

export const allTags = (state) => {
  let tagIDs = Object.keys(state.tags);
  return tagIDs.map( (id) => {
    return state.tags[id];
  });
};
