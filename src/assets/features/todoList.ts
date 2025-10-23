import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { ToDo } from '../models/todo-item'

export interface TodoState {
    todo: ToDo[]
}

const initialState: TodoState = {
    todo: [],
}

export const todoSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        createAction: (state, action: PayloadAction<string>) => {
            const newTodo: ToDo = {
                id: state.todo.length,
                text: action.payload,
                isDone: false
            }
            state.todo = [...state.todo, newTodo]
        },
        updateAction: (state, action: PayloadAction<ToDo>) => {
            const newTodos = state.todo.map((todo) => {
                if (todo.id === action.payload.id) {
                    todo.isDone = !todo.isDone
                }
                return todo
            })
            state.todo = newTodos

        },
        deleteAction: (state, action: PayloadAction<ToDo>) => {
            const newTodos = state.todo.filter((todo) => todo.id !== action.payload.id)
            state.todo = newTodos
        },
    },
})

export const { createAction, updateAction, deleteAction } = todoSlice.actions

export default todoSlice.reducer