import * as UTIL from '../util/todo_api_util.js';
import { receiveErrors, clearErrors } from './error_actions.js';
export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo
});

export const removeTodo = (todo) => ({
  type: REMOVE_TODO,
  todo
});

export const fetchTodos = () => (dispatch) => (
  UTIL.fetchAllTodos().then(todos => dispatch(receiveTodos(todos)))
);

export const createTodo = (todo) => (dispatch) => (
  UTIL.createTodo(todo)
    .then((newTodo) => dispatch(receiveTodo(newTodo)),
      err => dispatch(receiveErrors(err))).then(() => dispatch(clearErrors()))
);
