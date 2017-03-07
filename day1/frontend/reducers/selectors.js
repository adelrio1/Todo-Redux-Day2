export const allTodos = (state) => {
  let todoIDs = Object.keys(state.todos);
  return todoIDs.map( (id) => {
    return state.todos[id];
  });
};
