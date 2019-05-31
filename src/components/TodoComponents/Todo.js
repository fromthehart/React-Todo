import React from 'react'

class Todo extends React.Component {
  constructor(props) {
    super(props)
  }

  render = () => {
    return (
      <div 
        className={this.props.todo.completed === true ? 'todo completed' : 'todo incomplete'}
        onClick={() => this.props.changeStatus(this.props.todo)}><span>{this.props.todo.task}</span>
      </div>    
    )
  }
}

export default Todo;