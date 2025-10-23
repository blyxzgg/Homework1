import "./Form.scss"
import { useState } from "react";

const Form = (props: { createNewTodo: Function }) => {
    const [text, setText] = useState<string>('')

    const formSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()
        if (text) {
            props.createNewTodo(text)
            setText('')
        }
    }

    return (
        <>
            <div className="form-wrapper">
                <form action="#" onSubmit={formSubmit}>
                    <label>
                        <input
                            type="text"
                            onChange={(e) => setText(e.target.value)}
                            value={text}
                        />
                        <button></button>
                    </label>
                </form>
            </div>
        </>
    )
}

export default Form