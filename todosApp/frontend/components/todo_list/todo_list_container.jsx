import { connect } from 'react-redux';
import { allTodos, allTags } from '../../reducers/selectors.js';
import { deleteTodo, fetchTodos, createTodo, updateTodo } from '../../actions/todo_actions.js';
import TodoList from './todo_list.jsx';

const MapStateToProps = (state) => ({
  todos: allTodos(state),
  errors: state.errors,
  tags: allTags(state)
});

const MapDispatchToProps = (dispatch) => ({
  updateTodo: (todo) => dispatch(updateTodo(todo)),
  createTodo: (todo) => dispatch(createTodo(todo)),
  deleteTodo: (todo) => dispatch(deleteTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos())
});

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(TodoList);
