import ToDoListItem from "./ToDoListItem/ToDoListItem"
import type { ToDo } from "../../models/todo-item"
import { ToDoSection, ToDoWrapper } from "./ToDoList.styled"

const ToDoList = (props: { todos: ToDo[], updateToDo: Function, deleteToDo: Function }) => {



    const checkedList = () => {
        return props.todos.filter((item) => !item.isDone).map((item, index) => {
            return (
                <ToDoListItem toDoItem={item} key={index} updateToDo={props.updateToDo} deleteToDo={props.deleteToDo} />
            )
        })
    }

    const ucheckedList = () => {
        return props.todos.filter((item) => item.isDone).map((item, index) => {
            return (
                <ToDoListItem toDoItem={item} key={index} updateToDo={props.updateToDo} deleteToDo={props.deleteToDo} />
            )
        })
    }

    return (
        <>
            <ToDoWrapper>
                <ToDoSection className="todo-list failed">
                    {checkedList()}
                </ToDoSection>
                <ToDoSection className="todo-list completed">
                    {ucheckedList()}
                </ToDoSection>
            </ToDoWrapper>
        </>
    )
}

export default ToDoList