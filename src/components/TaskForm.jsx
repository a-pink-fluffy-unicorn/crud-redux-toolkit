import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, editTask } from '../features/tasks/taskSlice';
import { v4 as uuid } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom';

const TaskForm = () => {
  const { register, handleSubmit, setValue } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector((state) => state.tasks);

  const onSubmit = (data) => {
    if (params.id) {
      dispatch(editTask({ ...data, id: params.id }));
    } else {
      dispatch(
        addTask({
          ...data,
          id: uuid(),
        })
      );
    }
    navigate('/');
  };

  useEffect(() => {
    if (params.id) {
      const task = tasks.find((task) => task.id === params.id);
      if (task) {
        setValue('title', task.title);
        setValue('description', task.description);
      } else {
        console.error(`Task with id ${params.id} not found`);
      }
    }
  }, [params.id, tasks, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='bg-zinc-800 max-w-sm p-4 rounded-md'>
      <label className='block font-bold text-xs mb-2'>Task:</label>
      <input
        {...register("title", { required: true })}
        type="text"
        placeholder="title"
        className='w-full p-2 rounded-md bg-zinc-600 mb-2'
      />
      <label className='block font-bold text-xs mb-2'>Description:</label>
      <textarea
        {...register("description", { required: true })}
        placeholder="description"
        className='w-full p-2 rounded-md bg-zinc-600 mb-2'
      ></textarea>
      <button type="submit" className='bg-indigo-600 px-2 py-1'>Save</button>
    </form>
  );
};

export default TaskForm;