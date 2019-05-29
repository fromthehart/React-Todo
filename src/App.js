import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super()
    this.state={
      todos: [
        {
          task: 'Eat Breakfast',
          id: 314159265358979323846,
          completed: true
        },
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
      todos: [...this.state.todos, todoEntry],
      todo: ''
    })
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

  render() {
    return (
      <div>
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