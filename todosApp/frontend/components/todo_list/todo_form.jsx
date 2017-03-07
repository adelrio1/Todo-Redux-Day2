import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: ""};
    this.handleNewTodo = this.handleNewTodo.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  render() {
    return (
      <form onSubmit={this.handleNewTodo}>
        <input type="text" onChange={this.updateState} value={this.state.title}></input>
        <input type="submit" value="Create New Todo"></input>
      </form>
    );
  }

  updateState(event) {
    this.setState({title: event.currentTarget.value});
  }

  handleNewTodo(event) {
    event.preventDefault();
    const newTodo = { id: this.uniqueId(),
      title: this.state.title
    };
    this.props.receiveTodo(newTodo);
    this.setState({title: ""});
  }

  uniqueId() {
    return new Date().getTime();
  }
}

export default TodoForm;
