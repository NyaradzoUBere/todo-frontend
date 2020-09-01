import React from 'react';
import TodoContainer from './components/TodoContainer'
import TodoForm from './components/TodoForm'
import './App.css';

const todosURL = "http://localhost:3000/todos"

class App extends React.Component {
  state = {
    todos: []
  }

  componentDidMount() {
    this.getTodos()
  }

  getTodos = () => {
    fetch(todosURL)
      .then(response => response.json())
      .then(todos => this.setState({todos}))
  }

  addTodo = (newTodo) => {
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Todo App</h1>
        <TodoForm addTodo = {this.addTodo}/>
        <TodoContainer todos = {this.state.todos} />
      </div>
    );
  }
}

export default App;
