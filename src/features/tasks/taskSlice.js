import { createSlice } from '@reduxjs/toolkit'
const initialState  = [
    {
    id: "1",
    title: "task 1",
    description: "task 1 description",
    completed: false
    },
    {
    id: "2",
    title: "task 2",
    description: "task 2 description",
    completed: false
    }
]
export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload)        
            console.log(state)
        },
        deleteTask: (state, action) => {
            return state.filter(task => task.id !== action.payload)
        },
        editTask: (state, action) => {
            const { id, title, description } = action.payload
            const task = state.find(task => task.id === id)
            if (task) {
                task.title = title
                task.description = description
            }
        },
    }
})
export const { addTask, deleteTask, editTask } = taskSlice.actions
export default taskSlice.reducer