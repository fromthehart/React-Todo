import React from 'react'
import Todo from './Todo'
import './Todo.scss'

class TodoList extends React.Component {
  constructor(props) {
    super(props)    
  }

  render = () => {
    return (
      <div className="todos-container">
        <h1>Serenity {this.props.todos.length > 0 ? 'Soon' : 'Now'}</h1>
        {
          this.props.todos
            .filter(todo => todo.task.toLowerCase().includes(this.props.search.toLowerCase()))
            .map(todo => (
                <Todo
                  changeStatus={this.props.changeStatus}
                  todo={todo}
                />              
              )
            )
        }
      </div>
    )
  }
}

export default TodoList