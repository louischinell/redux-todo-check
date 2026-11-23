import React from 'react'
import { useState } from 'react'
import { editTodo, deleteTodo, markAsDone } from '../todoSlice'

function Task({item, dispatch, tasks }) {
    const [isVisible, setIsVisible] = useState(false)
    const [title, setTitle] = useState(item.title)
    const [desc, setDesc] = useState(item.desc)

    //Function to set the targetted task as done
    const handleDone = () => {
       const updatedTasks= tasks.map((task)=> {
        if (task.id === item.id) {
          return task = {...item, isDone: !task.isDone}
        } return task    })

       dispatch(markAsDone(updatedTasks))
    }

    //Function to edit the task's title and description
    const handleEditTask= (e) => {
      e.preventDefault()
      if (!title || !desc) return alert('Fields cannot be empty.')
      const updatedTasks = tasks.map(task => {
        if (task.id === item.id) {
        return task = {...item, title: title, desc: desc}
        } return task  });

      dispatch(editTodo(updatedTasks))
      setIsVisible(false)
    }

    //Function to delete the task
    const handleDelete = () => {
      const updatedTasks = tasks.filter((task) => task.id !== item.id)

      if (window.confirm('Are you sure you want to delete this task?')) {
        dispatch(deleteTodo(updatedTasks))
      } else return
      
    }
  return (
    <div key={item.id} className={`item ${item.isDone ? 'done' : ''}`}>
            {isVisible? <form onSubmit={(e)=>handleEditTask(e)}>
            <input type="text" placeholder='Task title' 
            value={title} onChange={(e)=> setTitle(e.target.value)} />
            <input type="text" placeholder='Description'
            value={desc} onChange={(e)=> setDesc(e.target.value)}  />
            <button>Confirm</button>
        </form>: <div><h4><span onClick={handleDone}>{item.isDone ? <>🗹</> : <>☐</>}</span> {item.title}</h4>
              <p>{item.desc}</p></div>}
              
            <div className='btn-item'>
            <> <button onClick={()=> setIsVisible((prev)=> !prev)}>{isVisible ? 'Cancel' : 'Edit'}</button>
            <button id='delete' onClick={handleDelete}>Delete</button></>
           
            </div>
    </div>
  )
}

export default Task