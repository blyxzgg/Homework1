import type { ToDo } from "../../../models/todo-item"
import { ToDoItem, ToDoItemControl, ToDoItemControls, ToDoItemText } from "./ToDoListItem.styled"

import checkIcon from "../../../images/check.png"
import uncheckIcon from "../../../images/uncheck.png"
import trashIcon from "../../../images/trash.png"

const ToDoListItem = (props: { toDoItem: ToDo, updateToDo: Function, deleteToDo: Function }) => {
    return (
        <>
            <ToDoItem>
                <ToDoItemText>{props.toDoItem.text}</ToDoItemText>
                <ToDoItemControls>
                    <ToDoItemControl
                        onClick={() => props.deleteToDo(props.toDoItem)}
                        icon={trashIcon }
                    ></ToDoItemControl>
                    <ToDoItemControl
                        onClick={() => props.updateToDo(props.toDoItem)}
                        icon={props.toDoItem.isDone ? checkIcon : uncheckIcon}
                    ></ToDoItemControl>
                </ToDoItemControls>
            </ToDoItem>
        </>
    )
}

export default ToDoListItem