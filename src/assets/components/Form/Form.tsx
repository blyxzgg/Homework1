import { useState } from "react";

import plusIcon from "../../images/plus.png"
import { FormBlock, FormControl, FormField, FormLabel, FormWrapper } from "./Form.styled";

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
            <FormWrapper>
                <FormBlock action="#" onSubmit={formSubmit}>
                    <FormLabel>
                        <FormField
                            type="text"
                            onChange={(e) => setText(e.target.value)}
                            value={text}
                        />
                        <FormControl icon={plusIcon} />
                    </FormLabel>
                </FormBlock>
            </FormWrapper>
        </>
    )
}

export default Form