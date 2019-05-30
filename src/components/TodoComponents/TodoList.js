// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react'
import Todo from './Todo'
import './Todo.scss'

const TodoList = props => {
  const filteredList = props.todos.filter(todo => todo.task.toLowerCase().includes(props.search.toLowerCase()))
  // console.log(filteredList)
  return (
    <div className="todos-container">
      <h1>Serenity {props.todos.length > 0 ? 'Soon' : 'Now'}</h1>
      {filteredList.map(todo => (
        <Todo
          changeStatus={props.changeStatus}
          todo={todo}
        />
      ))}
    </div>
  )
}

export default TodoList