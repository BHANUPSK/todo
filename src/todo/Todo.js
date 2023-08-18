import React, { useState } from 'react'
import '../App.css';
import data from './todoData.json'
const Todo = () => {
  const [list, setList] = useState(data)
  const [msg, setmsg] = useState('');
  console.log(msg)

  
  // adding task
  const addTask =()=>{
    let tempList=JSON.parse(JSON.stringify(list));
    let singleData={
      id:list.length+1,
      msg:msg,
      status:"doing"
    }
    tempList.push(singleData);
    setmsg('')
    setList(tempList)
  }

  const markDoing=(id)=>{
    let tempList=JSON.parse(JSON.stringify(list));
    tempList.forEach((val) => {
      if(val.id===id)
      val.status="doing"
    });
    setList(tempList)
  }

  const markDone=(id)=>{
    let tempList=JSON.parse(JSON.stringify(list));
    tempList.forEach((val) => {
      if(val.id===id)
      val.status="done"
    });
    setList(tempList)
  }

  
  return (
    <div className='Contener'>
      <div className='New'>
        <h3>Creat New Task</h3>
        <input value={msg} onChange={(e) => { setmsg(e.target.value) }}></input>
        <button onClick={()=>{addTask()}}>Button</button>
      </div>
      <div className='Do'>
        <h1>To Do</h1>
        {
          list.filter((item)=>item.status==='doing').map((val) => {
            return (
              <div>
                <input type="checkbox" onClick={()=>{markDone(val.id)}}></input>
                <span>{val.msg}</span>
              </div>
            )
          })
        }
      </div>
      <div className='Com'>
        <h3>Complited Task</h3>
        {
          list.filter((item)=>item.status==='done').map((val) => {
            return (
              <div>
                <input type="checkbox" checked onClick={()=>{markDoing(val.id)}}></input>
                <span>{val.msg}</span>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Todo
