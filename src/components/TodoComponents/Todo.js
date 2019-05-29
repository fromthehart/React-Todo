import React from 'react'

const Todo = props => {
  const completionStatus=props.todo.completed === true ? 'todo completed' : 'todo incomplete'
  
  return (
    <div 
      className={completionStatus}
      onClick={() => props.changeStatus(props.todo)}><span>{props.todo.task}</span>
    </div>
  )
}

export default Todo;