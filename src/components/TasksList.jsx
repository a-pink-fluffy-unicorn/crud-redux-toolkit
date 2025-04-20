import { useSelector, useDispatch } from 'react-redux'
import { deleteTask } from '../features/tasks/taskSlice'
import { Link } from "react-router-dom";
const TasksList = () => {
  const tasks = useSelector(state => state.tasks)
  console.log(tasks)
  const dispatch = useDispatch()
  const handleDelete = (id) => {
  dispatch(deleteTask(id))
  }
  return (
    <div className='w-4/6'>
      <header className='flex justify-between items-center py-4'>
        <h1 className=''>Tasks {tasks.length }</h1>
        <Link
          to='/create-task'
          className='bg-indigo-600 px-2 py-1 rounded-md text-sm shadow-sm'
        >
          Create Task
        </Link>
        </header>
        <div className='grid grid-cols-3 gap-4 p-4 rounded-md'>  
          {tasks.map(task => (
            <div key={task.id}
            className='bg-zinc-800 p-4 rounded-md'>
              <header className='flex justify-between'> 
                <h3  className='text-lg font-bold'>{task.title}</h3>
                <div className='flex gap-x-2'>          
                 <Link 
                  to={`/edit-task/${task.id}`} // Cambiado para pasar dinámicamente el id
                  className='bg-zinc-600 px-2 py-1 text-xs rounded-md self-center'
                 >
                Edit
                </Link>
                  <button 
                  className='bg-red-500 px-2 py-1 text-xs rounded-md cursor-pointer self-center'  
                  onClick={() => handleDelete(task.id)}>
                  Delete
                  </button>   
                </div>
              </header>
             <p>{task.description}</p>
            </div>
          ))}
        </div>
    </div>
  )
}
export default TasksList
