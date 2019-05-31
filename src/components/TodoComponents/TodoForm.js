import React from 'react'

class TodoForm extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render = () => {
    return (
      <form onSubmit={this.props.onAddTodo}>
        <input
          type='text'
          name='todo'
          onChange={this.props.onInput}
          placeholder='…todo'
          value={this.props.todo}
        />
        <div className='button-box'>
          <button onClick={this.props.onAddTodo}>Add Todo</button>
          <button onClick={this.props.onCompleteTodos}>Clear Completed</button>
        </div>
        <input
          type='text'
          name='search'
          onChange={this.props.onInput}
          placeholder='search…'
          value={this.props.search}
        />
      </form>
    )
  }
}

export default TodoForm