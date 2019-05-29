// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react'
import Todo from './Todo'
import './Todo.scss'

const TodoList = props => {
  return (
    <div className="todos-container">
      <h1>Serenity Soon</h1>
      {props.todos.map(todo => (
        <Todo
          changeStatus={props.changeStatus}
          todo={todo}
        />
      ))}
    </div>
  )
}

export default TodoList