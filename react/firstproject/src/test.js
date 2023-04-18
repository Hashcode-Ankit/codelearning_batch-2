import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super()
    this.state = {
      todo: '',
      todos: [],
    };
  }

  handleInputChange = (e) => {
    this.setState({ todo: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { todo, todos } = this.state;
    this.setState({ todos: [...todos, todo], todo: '' });
  };

  handleDelete = (index) => {
    const { todos } = this.state;
    this.setState({ todos: todos.filter((_, i) => i !== index) });
  };

  render() {
    const { todo , todos } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Add todo"
            value={todo}
            onChange={this.handleInputChange}
          />
          <button type="submit">Add</button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => this.handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;