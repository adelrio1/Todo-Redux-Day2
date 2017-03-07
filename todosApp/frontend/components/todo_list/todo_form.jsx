import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "", body: ""};
    this.handleNewTodo = this.handleNewTodo.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }

  render() {
    return (
      <form onSubmit={this.handleNewTodo}>
        <input type="text" onChange={this.updateTitle} value={this.state.title}></input>
        <textarea onChange={this.updateBody} value={this.state.body}></textarea>
        <input type="submit" value="Create New Todo"></input>
      </form>
    );
  }

  updateTitle(event) {
    this.setState({title: event.currentTarget.value});
  }

  updateBody(event) {
    this.setState({body: event.currentTarget.value});
  }

  handleNewTodo(event) {
    event.preventDefault();
    const newTodo = {
      title: this.state.title,
      body: this.state.body,
      done: false
    };
    this.props.createTodo(newTodo).then(
      () => this.setState({title: "", body: ""})
    );
  }
}

export default TodoForm;
