import './App.css';
import TaskForm from './components/TaskForm.jsx'
import TasksList from './components/TasksList.jsx'
function App () {
  return (
    <div className='App'>
      <h1>Redux Toolkit</h1>
      <TaskForm />
      <TasksList />
    </div>
  )
}
export default App
