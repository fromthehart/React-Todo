import React from 'react'

const Todo = props => {
  const className=props.todo.completed === true ? 'completed' : ''
  console.log(className)
  return (
    <div 
      className={className}
      onClick={() => props.changeStatus(props.todo)}>{props.todo.task}
    </div>
  )
}

export default Todo;