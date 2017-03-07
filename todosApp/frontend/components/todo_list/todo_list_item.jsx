import React from 'react';
import TodoDetailView from './todo_detail_view.jsx';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
    this.handleStatus = this.handleStatus.bind(this);
    this.toggleDetail = this.toggleDetail.bind(this);
    this.state = { detail: false };
  }

  render() {
    return (
      <li>
        <p onClick={this.toggleDetail}>title: { this.props.todo.title }</p>
        <button onClick={this.handleStatus}>{this.props.todo.done ? "undo" : "complete"}</button>
        <button onClick={this.handleRemoveTodo}>Remove Todo</button>
        <TodoDetailView todo={this.props.todo} detail={this.state.detail} />
      </li>);
  }
  handleRemoveTodo(event) {
    event.preventDefault();
    this.props.removeTodo(this.props.todo);
  }

  handleStatus(event) {
    this.props.todo.done = (this.props.todo.done ? false : true);
    event.preventDefault();
    this.props.receiveTodo(this.props.todo);
  }

  toggleDetail(event) {
    event.preventDefault();
    if (this.state.detail) {
      this.setState({ detail: false });
    } else { this.setState({ detail: true });}
  }
}

export default TodoListItem;
