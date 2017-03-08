import React from 'react';
import TodoListItem from './todo_list_item.jsx';
import TodoForm from './todo_form.jsx';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTodos();
  }
  render() {
    const TodoListItems = this.props.todos.map( (todo, index) => (
      <TodoListItem todo={todo} key={index}
        deleteTodo={this.props.deleteTodo} updateTodo={this.props.updateTodo}
         />
    ));
    return (
      <div>
        <ul>
          {TodoListItems}
        </ul>
        <TodoForm createTodo={this.props.createTodo} />
        {this.props.errors}
      </div>
    );
  }
}

export default TodoList;
