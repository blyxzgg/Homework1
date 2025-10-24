import type { ToDo } from "../../models/todo-item"
import { ListItemLink } from "./ListItem.styled"

const ListItem = ({ todo }: { todo: ToDo }) => {
    return (
        <>
            <ListItemLink
                href={`/list/${todo.id}`}
                className={`${ListItemLink} ${todo.isDone ? 'done' : 'notDone'}`}
                rel='noreferrer'
                target="_blank">{todo.text}
            </ListItemLink>
        </>
    )
}

export default ListItem