import './App.css';
import TaskForm from './components/TaskForm.jsx'
import TasksList from './components/TasksList.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App () {
  return (
    <div className='bg-zinc-900 h-screen text-white'>
      <div className='flex items-center justify-center h-screen'>
      <BrowserRouter> 
      <Routes>
      <Route path='/' element = {<TasksList />} />
      <Route path='/create-task' element= {<TaskForm />}/>
      <Route path='/edit-task/:id' element= {<TaskForm />}/>
      </Routes>
      </BrowserRouter>
      </div>
      
    </div>
  )
}
export default App
