import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './App.scss'

class App extends React.Component {
  constructor() {
    super()

    // Try to load persisted todo list from local storage, or will be empty if not found
    let saved = null
    try {
      saved = JSON.parse(localStorage.getItem('todos'))
    } catch(e) {}

    // Initialize state with either our persisted data or empty
    this.state={
      todos: saved,
      todo: ''
    }
    // console.log(this.state)
  }

  addTodo = e => {
    e.preventDefault();
    const todoEntry = {
      task: this.state.todo,
      id: Date.now(),
      completed: false
    }
    if (todoEntry.task.trim() !== '') {
      this.setState({
        todos: [...this.state.todos, todoEntry],
        todo: ''
      })
    }
  }

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(todo => todo.completed === false)
    })
  }

  formUpdate = e => {
    // console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  changeStatus = task => {
    // const todo = this.state.todos.filter(todo => task.id === todo.id)
    // console.log(todo[0].completed)
    // ^-- initially started with filter because of building off clearCompleted
    // realizing map made more sense was an Aha! moment

    const todos = this.state.todos.map(todo => {
      if (task.id === todo.id) todo.completed = !todo.completed;
      // console.log(todo)
      return todo
    })
    this.setState({todos: todos})
  }

  persist = () => {
    localStorage.setItem('todos', JSON.stringify(this.state.todos))
  }

  render() {
    this.persist()
    return (
      <div className="container">
        <TodoList 
          changeStatus={this.changeStatus}
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