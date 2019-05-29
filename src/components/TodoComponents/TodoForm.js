import React from 'react'

const TodoForm = props => {
  return (
    <form onSubmit={props.onAddTodo}>
      <input
        onChange={props.onInput}
        placeholder='…todo'
        value={props.value}
      />
      <button onClick={props.onAddTodo}>Add Todo</button>
      <button onClick={props.onCompleteTodos}>Clear Completed</button>
    </form>
  )
}

export default TodoForm