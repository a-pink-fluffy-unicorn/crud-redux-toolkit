import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../features/tasks/taskSlice';
import { Link } from 'react-router-dom';
const TasksList = () => {
    const dispatch = useDispatch()
    const tasks = useSelector(state => state.tasks)
    console.log(tasks)
    const handleDelete = (id) => {
        dispatch(deleteTask(id))
    }
  return (
    <div>
      <header>
        <h1>Tasks ({tasks.length})</h1>
        <Link
          to="/create-task"
        >
          Create Task
        </Link>
      </header>
      <div> {tasks.map(task => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <div> 
            <Link
              to={`/edit-task/${task.id}`}>
              Edit
            </Link>
          </div>
          <p>{task.description}</p>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
          <p>{task.id}</p>
        </div>
      ))}
      </div>
    </div>
  )
}
export default TasksList;
