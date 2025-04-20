import './App.css';
import TaskForm from './components/TaskForm.jsx'
import TasksList from './components/TasksList.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App () {
  return (
    <div className='App'>
      <h1>Redux Toolkit</h1>
      <BrowserRouter> 
      <Routes>
      <Route path='/' element = {<TasksList />} />
      <Route path='/create-task' element= {<TaskForm />}/>
      <Route path='/edit-task/:id' element= {<TaskForm />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
