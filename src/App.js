import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super()
    this.state={
      todos: [
        {
          task: 'React Todo Day 1 MVP',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'React Todo Day 2 MVP',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }

  addTodo() {
    this.setState({

    })
  }

  clearCompleted() {
    this.setState({

    })
  }

  render() {
    return (
      <div>
        <TodoList />
        <TodoForm
          onAddTodo={this.addTodo}
          onCompleteTodos={this.clearCompleted}
          value={this.state.todo}
        />
      </div>
    );
  }
}

export default App;
