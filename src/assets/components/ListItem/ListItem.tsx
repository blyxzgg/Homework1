import type { ToDo } from "../../models/todo-item"
import classes from "./ListItem.module.scss"

const ListItem = ({ todo }: { todo: ToDo }) => {
    return (
        <>
            <a
                href={`/list/${todo.id}`}
                className={`${classes.link} ${todo.isDone ? classes.done : classes.notDone}`}
                rel='noreferrer'
                target="_blank">{todo.text}
            </a>
        </>
    )
}

export default ListItem