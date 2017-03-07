import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { allTodos } from './reducers/selectors.js';
import { receiveTodo, receiveTodos, removeTodo } from './actions/todo_actions.js';
import Root from './components/root.jsx';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.store = store;
  window.allTodos = allTodos;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.removeTodo = removeTodo;
  ReactDOM.render(<Root store={store} />, document.getElementById('root'));


});
