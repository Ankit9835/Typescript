import React from 'react'

interface ToDoListProps {
    items: {id: string, text: string}[]
    onDelete: (id: string) => void
}

const TODoList: React.FC<ToDoListProps> = props => {
    return (
        <ul>
          {props.items.map(todo => (
            <li key={todo.id}><span>
                    {todo.text}
                    <button onClick={props.onDelete.bind(null, todo.id)}>
                        DELETE
                    </button>
                </span></li>
          ))}
        </ul>
      );
}

export default TODoList

