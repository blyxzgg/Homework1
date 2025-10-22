import type { ToDo } from "../../models/todo-item"
import classes from "./ListItem.module.scss"

const ListItem = ({ todo }: { todo: ToDo }) => {
    return (
        <>
            <a href={`/app/list/${todo.id}`} className={`${classes.link} ${todo.isDone ? classes.done : classes.notDone}`} target="_blank">{todo.text}</a>
        </>
    )
}

export default ListItem