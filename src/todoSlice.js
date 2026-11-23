import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            return [...state, action.payload]
        },
        editTodo: (state, action) => {
            return action.payload
        },
        markAsDone: (state, action) => {
            return action.payload
        },
        deleteTodo:(state, action) => {
            return action.payload
        }
    }
})

export const {addTodo, editTodo, deleteTodo, markAsDone} = todoSlice.actions
export default todoSlice.reducer