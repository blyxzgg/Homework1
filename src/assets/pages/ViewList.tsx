import { useSelector } from "react-redux"
import ListItem from "../components/ListItem/ListItem"
import type { ToDo } from "../models/todo-item"
import type { RootState } from "../../store"

const ViewList = () => {
    const todoList = useSelector((state: RootState) => state.todoList.todo)

    return (
        <div className="container">
            {
                todoList.map((todo: ToDo, index: number) => (
                    <ListItem key={index} todo={todo} />
                ))
            }
        </div>
    )
}

export default ViewList
