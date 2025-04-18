import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasks/taskSlice';
const TaskForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    data = {...data}
    dispatch(addTask(data))
    reset();
    
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input          
        {...register("title")}
        type="text" placeholder="title"/>
      <textarea 
        {...register("description")}
        name="description" placeholder="description"></textarea>
      <button>Save</button>
    </form>
  )
}
export default TaskForm
