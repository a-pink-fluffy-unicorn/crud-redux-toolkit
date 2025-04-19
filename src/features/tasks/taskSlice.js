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
    }
})
export const { addTask, deleteTask } = taskSlice.actions
export default taskSlice.reducer