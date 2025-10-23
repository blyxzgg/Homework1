import Form from "../components/Form/Form";
import ToDoList from "../components/ToDoList/TodoList";
import type { ToDo } from "../models/todo-item";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import { createAction, deleteAction, updateAction } from "../features/todoList";

const ToDoListPage = () => {
    const todoList = useSelector((state: RootState) => state.todoList.todo)
    const dispatch = useDispatch()

    const createNewTodo = (text: string) => {
        dispatch(createAction(text))
    }

    const updateToDo = (toDoItem: ToDo) => {
        dispatch(updateAction(toDoItem))
    }

    const deleteToDo = (toDoItem: ToDo) => {
        dispatch(deleteAction(toDoItem))
    }

    return (
        <>
            <Form createNewTodo={createNewTodo} />

            <ToDoList todos={todoList} updateToDo={updateToDo} deleteToDo={deleteToDo} />
        </>
    )
}

export default ToDoListPage;