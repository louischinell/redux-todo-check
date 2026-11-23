import React from 'react'
import { useState } from 'react'
import { addTodo } from '../todoSlice'

function AddTask({tasks, dispatch}) {

  const [isVisible, setIsVisible] = useState(false)
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  function handleAddTask (e) {
    e.preventDefault()
    //Check that the fields aren't empty
    if (!title || !desc) {
      return alert('Please fill all fields.')
    }
    const newTask = {
      id: tasks.length + 1,
      title: title,
      desc: desc,
      isDone: false
    }
    dispatch(addTodo(newTask))
    setTitle('')
    setDesc('')
    setIsVisible(false)
  }

  return (
    <div className='form'>
        <button onClick={()=> setIsVisible(prev => !prev)}>Add task</button>
        {isVisible ? <form onSubmit={handleAddTask}>
            <input type="text" placeholder='Task title' 
            value={title} onChange={(e)=> setTitle(e.target.value)} />
            <input type="text" placeholder='Description'
            value={desc} onChange={(e)=> setDesc(e.target.value)}  />
            <button>Confirm</button>
        </form> : null}
    </div>
  )
}

export default AddTask