import React, { useState } from 'react';
import TODoList from './components/ToDoList';
import NewToDo from './components/NewToDo';
import { ToDo } from './ToDo.model';

const App: React.FC = () => {
  const todo = [{id:'ts1', text: 'test'}]

  const [todos, setToDos] = useState<ToDo[]>([])
  const toDoHandler = (text: string) => {
   setToDos(prevToDos => [...prevToDos, {id: Math.random().toString(), text: text}])
  }

  const ToDoRemove = (id:string) => {
    setToDos(prevToDos => {
      return prevToDos.filter(todo => todo.id !== id)
    })
  }
  return (
    <div className="App">
     <TODoList items={todos} onDelete={ToDoRemove} />
     <NewToDo OnToDo={toDoHandler}/>
    </div>
  );
}


export default App;
