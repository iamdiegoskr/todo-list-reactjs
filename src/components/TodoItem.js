import React from 'react'
import '../styles/TodoItem.css'

export function TodoItem({todo,toggleTodo}){

    const {id, task, completed} = todo;

    const handleTodoClick = (event)=>{
        toggleTodo(id)
    }

    return (
        <li className="item-todo">
            <input type="checkbox" checked={completed}  onChange={handleTodoClick} />
            <p className="only-task">{task}</p>
        </li>
    )
}
