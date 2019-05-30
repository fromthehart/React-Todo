import React from 'react'

const TodoForm = props => {
  return (
    <form onSubmit={props.onAddTodo}>
      <input
        type='text'
        name='todo'
        onChange={props.onInput}
        placeholder='…todo'
        value={props.todo}
      />
      <div className='button-box'>
        <button onClick={props.onAddTodo}>Add Todo</button>
        <button onClick={props.onCompleteTodos}>Clear Completed</button>
      </div>
      <input
        type='text'
        name='search'
        onChange={props.onInput}
        placeholder='search…'
        value={props.search}
      />
    </form>
  )
}

export default TodoForm