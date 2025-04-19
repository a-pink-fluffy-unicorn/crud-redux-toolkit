import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasks/taskSlice';
import { v4 as uuid } from 'uuid';
const TaskForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (task) => {
    task = 
    {...task,
    id: uuid()
    }
    dispatch(addTask(task))
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input          
        {...register("title")}
        type="text" 
        placeholder="title"/>
      <textarea 
        {...register("description")}
        name="description" 
        placeholder="description">
        </textarea>
      <button>Save</button>
    </form>
  )
}
export default TaskForm
