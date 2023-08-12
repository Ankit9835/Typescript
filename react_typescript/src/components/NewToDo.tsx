import React, {useRef} from 'react'


interface NewToDoProps {
    OnToDo: (toDoText: string) => void
}

const NewToDo: React.FC<NewToDoProps> = props => {
    const textInputValue = useRef<HTMLInputElement>(null)

    const submitValue = (event:React.FormEvent) => {
        event.preventDefault()
        const enteredValue = textInputValue.current!.value
        props.OnToDo(enteredValue)
        //console.log(enteredValue)
    }

    return (
        <form onSubmit={submitValue}>
        <div>
          <label htmlFor="todo-text">Todo Text</label>
          <input type="text" id="todo-text"  ref={textInputValue} />
        </div>
        <button type="submit">ADD TODO</button>
      </form>
    )
}

export default NewToDo