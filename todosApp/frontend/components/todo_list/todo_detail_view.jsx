import React from 'react';

class TodoDetailView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.detail) {
      return <p>{this.props.todo.body}</p>;
    }
    else { return <p></p>; }
  }
}

export default TodoDetailView;
