import { useEffect, useState } from "react"
import type { ToDo } from "../models/todo-item"
import { useNavigate, useParams } from "react-router-dom"

interface ComponentsProps {
    todos: ToDo[]
}

const ItemDescription = ({ todos }: ComponentsProps) => {

    const { id } = useParams()
    const navigate = useNavigate()
    const [todo, setTodo] = useState<ToDo>()

    useEffect(() => {
        const searchTodo = todos.find(((todo) => String(todo.id) === id))
        if (searchTodo) {
            setTodo(searchTodo)
        } else {
            navigate('*')
        }
    }, [todos, id, navigate])

    return (
        <>
            <div className="container">
                <h1>{todo?.text}</h1>
            </div>
        </>
    )
}

export default ItemDescription