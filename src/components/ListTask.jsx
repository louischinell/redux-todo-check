import React, {useState} from 'react';
import AddTask from './AddTask';
import Task from './Task';
import { useSelector, useDispatch } from 'react-redux';

function ListTask( ) {

  const tasks = useSelector(state => state)
  const dispatch = useDispatch()
  const [filter, setFilter] = useState('none')

  return (
    <>
    <div className='list'>
      <h2>
       To do:  {tasks && <>{tasks.length} task{tasks.length == 1 ? '' : 's'}</>}
      </h2>
      <AddTask dispatch={dispatch} tasks={tasks} />

    </div>
    <div className='list'>
      <div className="filters">
        <button onClick={()=> setFilter('active')} >Active tasks</button>
        <button onClick={()=> setFilter('done')}>Completed tasks</button>
        <span onClick={()=> setFilter('none')}>reset</span>
      </div>

      { filter !== 'none' && tasks.map((item) => {
      if (item.isDone === (filter === 'done' ? true : false)) {
          return <Task item={item} dispatch={dispatch} tasks={tasks} />
      } else return } )}


      { filter === 'none' && <>
        {tasks.length === 0 && <p id='task-message'>No task added yet</p>}
        {tasks && tasks.map((item)=> 
        <Task item={item} dispatch={dispatch} tasks={tasks} />)}</>
      }
     
      
    </div>
    </> 
    )}

export default ListTask