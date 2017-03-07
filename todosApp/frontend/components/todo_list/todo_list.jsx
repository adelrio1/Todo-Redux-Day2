import React from 'react';
import TodoListItem from './todo_list_item.jsx';
import TodoForm from './todo_form.jsx';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const TodoListItems = this.props.todos.map( (todo, index) => (
      <TodoListItem todo={todo} key={index} removeTodo={this.props.removeTodo} receiveTodo={this.props.receiveTodo} />
    ));
    return (
      <div>
        <ul>
          {TodoListItems}
        </ul>
        <TodoForm receiveTodo={this.props.receiveTodo}/>
      </div>
    );
  }
}

export default TodoList;
