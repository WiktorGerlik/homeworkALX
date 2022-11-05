import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

// const TODOS = [
//     {
//         id: 1,
//         title: 'wyniesc smieci'
//     },
//     {
//         id: 2,
//         title: 'posprzatac'
//     }
// ];

function TodoList () {
    const [todoInputValue, setTodoInputValue] = useState('');//obsługa inputa

    //const [todoText, setTodoText] = useState('');//obsługa submitu

    const [todos, setTodos] = useState([]);

    const handleTodoInputChange =  (event) => {
        event.preventDefault();
        setTodoInputValue(event.target.value)
    }

    const handleSubmit =  (event) => {
        event.preventDefault();
        //setTodoText(todoInputValue);
        const newTodo = 
                 {
                     id: uuidv4(),
                     title: todoInputValue
                 }
        //todos.push(newTodo); to nie jest pure function, bo zmienia wartości
        const newTodos = todos.concat(newTodo);//pure function, do starej tablicy dopisuje nowy obiekt
        setTodos(newTodos); //zastepuje tablice todos na setTodos         

        setTodoInputValue('')
    }
    const handleRemoveTodos =  (event) => {
        setTodos([])
    }



    return (
        <div>
            <p>Todo List</p>
        
            <form onSubmit={handleSubmit}>
                <label>
                    Task
                    <input 
                    type='text' 
                    value={todoInputValue} 
                    onChange={handleTodoInputChange}/>
                </label>
                <button type="submit">Add task</button>
            </form>
            {/* zamiana tablicy obiektów na listę: */}
            <ul>
                {todos.map(todo => {return <li key={todo.id}>{todo.title} {todo.id}</li>})}
            </ul>
            <button onClick={handleRemoveTodos}>Remove Todos</button>
        </div>
    )
}
export default TodoList