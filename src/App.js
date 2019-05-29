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
      ],
      todo: ''
    }
  }

  addTodo = e => {
    e.preventDefault();
    const todoEntry = {
      task: this.state.todo,
      id: Date.now(),
      completed: false
    }
    this.setState({

    })
  }

  clearCompleted = e => {
    e.preventDefault();
    this.setState({

    })
  }

  formUpdate = e => {
    // console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <TodoList 
          todos={this.state.todos}
        />
        <TodoForm
          onInput={this.formUpdate}
          onAddTodo={this.addTodo}
          onCompleteTodos={this.clearCompleted}
          value={this.state.todo}
        />
      </div>
    );
  }
}

export default App;
