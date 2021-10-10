import React from 'react'
import '../styles/todolist.css'

import {TodoItem} from './TodoItem.js'


export function TodoList({todos,toggleTodo}) {

    return (
        <div className="todoList">
            <h2 className="title-list">Lista de tareas</h2>
            <ul className="list-todos">
                {todos.map((todo)=>(
                    <TodoItem  key={todo.id} todo={todo} toggleTodo={toggleTodo} />
                ))}
            </ul>
        </div>
    )
}
