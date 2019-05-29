import React from 'react'

const Todo = props => {
  return (
    <div onClick={() => props.changeStatus(props.todo)}>{props.todo.task}</div>
  )
}

export default Todo;