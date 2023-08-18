import React, { useState } from 'react'
import '../App.css';
import data from './todoData.json'
const Todo = () => {
  const [list ,setList]=useState(data)
  // const [const ]
  console.log(list)
  return (
    <div className='Contener'>
      <div className='New'>
        <h3>Creat New Task</h3>
        <input></input>
        <button>Button</button>
      </div>
      <div className='Do'>
        <h1>To Do</h1>
        <input type="checkbox"></input>
      </div>
      <div className='Com'>
        <h3>Complited Task</h3>
      </div>
    </div>
  )
}

export default Todo
