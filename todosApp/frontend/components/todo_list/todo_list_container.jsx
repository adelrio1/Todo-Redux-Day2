import { connect } from 'react-redux';
import { allTodos } from '../../reducers/selectors.js';
import { receiveTodo, removeTodo, fetchTodos, createTodo } from '../../actions/todo_actions.js';
import TodoList from './todo_list.jsx';

const MapStateToProps = (state) => ({
  todos: allTodos(state),
  errors: state.errors
});

const MapDispatchToProps = (dispatch) => ({
  createTodo: (todo) => dispatch(createTodo(todo)),
  removeTodo: (todo) => dispatch(removeTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos())
});

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(TodoList);
