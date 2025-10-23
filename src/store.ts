import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "./assets/features/todoList"
import { loadFromLocalStorage, saveToLocalStorage } from './assets/helpers/storage'

import { combineReducers } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
    todoList: todoReducer
})

export const store = configureStore({
    reducer: rootReducer,
    preloadedState: loadFromLocalStorage()
})

store.subscribe(() => saveToLocalStorage(store.getState()))


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch