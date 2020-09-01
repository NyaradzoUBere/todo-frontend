import React from 'react';

import './App.css';

class App extends React.Component {
  state = {
    todos: []
  }
  render() {
    return (
      <div className="App">
        <h1>Todo App</h1>
      </div>
    );
  }
}

export default App;
