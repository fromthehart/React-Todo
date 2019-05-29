import React from 'react'

const TodoForm = props => {
  return (
    <form onSubmit={props.onAddTodo}>
      <input
        name='todo'
        onChange={props.onInput}
        placeholder='…todo'
        value={props.value}
      />
      <div className='button-box'>
        <button onClick={props.onAddTodo}>Add Todo</button>
        <button onClick={props.onCompleteTodos}>Clear Completed</button>
      </div>
    </form>
  )
}

export default TodoForm