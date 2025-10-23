import { useEffect, useState } from "react"
import type { ToDo } from "../models/todo-item"
import { useNavigate, useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import type { RootState } from "../../store"

const ViewListItem = () => {
    const todoList = useSelector((state: RootState) => state.todoList.todo)

    const { id } = useParams()
    const navigate = useNavigate()
    const [todo, setTodo] = useState<ToDo>()

    useEffect(() => {
        const searchTodo = todoList.find(((todo) => String(todo.id) === id))
        if (searchTodo) {
            setTodo(searchTodo)
        } else {
            navigate('*')
        }
    }, [todoList, id, navigate])

    return (
        <>
            <div className="container">
                <h1>{todo?.text}</h1>
            </div>
        </>
    )
}

export default ViewListItem