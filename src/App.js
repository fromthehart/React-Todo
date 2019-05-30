import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './App.scss'

class App extends React.Component {
  constructor() {
    super()

    // Try to load persisted todo list from local storage, or set a default task if not found

    let todos = JSON.parse(localStorage.getItem('todos'))
    
    try {
      const nullCheck = todos.length;
    } catch(e) {
      todos = [
        {
          task: "Start a to-do list",
          id: Date.now(),
          completed: false
        }
      ]
    }

    // Initialize state with either our persisted data or the default task
    this.state={
      todos,
      todo: '',
      search: ''
    }
    // console.log(this.state)
  }

  addTodo = e => {
    e.preventDefault();
    const todoEntry = {
      task: this.state.todo.trim(),
      id: Date.now(),
      completed: false
    }
    if (todoEntry.task) {
      // this.setState({
      //     todos: [...this.state.todos, todoEntry],
      //     todo: ''
      // }, this.persist)
      this.setState(prevState => ({
        todos: [...prevState.todos, todoEntry],
        todo: ''
      }))
    }
  }

  clearCompleted = e => {
    e.preventDefault();
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.completed === false)
    }))
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
      if (task.id === todo.id) todo.completed = !todo.completed
      return todo
    })
    this.setState(prevState => ({todos}))
  }

  persist = () => {
    localStorage.setItem('todos', JSON.stringify(this.state.todos))
  }

  render = () => {
    this.persist()
    return (
      <div className="container">
        <TodoList 
          changeStatus={this.changeStatus}
          todos={this.state.todos}
          search={this.state.search}
        />
        <TodoForm
          onInput={this.formUpdate}
          onAddTodo={this.addTodo}
          onCompleteTodos={this.clearCompleted}
          todo={this.state.todo}
          search={this.state.search}
        />
      </div>
    );
  }
}

export default App;