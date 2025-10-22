import ListItem from "../components/ListItem/ListItem"
import type { ToDo } from "../models/todo-item"

interface ComponentsProps {
    todos: ToDo[]
}

const HomePage = ({todos}: ComponentsProps) => {
    return (
        <div className="container">
            {
                todos.map((todo: ToDo, index: number) => (
                    <ListItem key={index} todo={todo} />
                ))
            }
        </div>
    )
}

export default HomePage
