import React from 'react'

const Todo = props => {
  const className=props.todo.completed === true ? 'completed' : ''
  
  return (
    <div 
      className={className}
      onClick={() => props.changeStatus(props.todo)}>{props.todo.task}
    </div>
  )
}

export default Todo;