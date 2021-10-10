import React, {useState, useRef, useEffect} from 'react'
import { TodoList } from './components/TodoList';
import { Header } from './components/header/header';
import './styles/App.css'

import { v4 as uuidv4 } from 'uuid';

const KEY = "todoApp.todos";

function App() {

  const [todos, settodos] = useState([{
    id:1,
    task:"Terminar curso ReactJS",
    completed:false
}])

  const todoTaskRef = useRef();

  useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem(KEY));
    if(storedTodos){
      settodos(storedTodos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem(KEY, JSON.stringify(todos))
  },[todos])


  const handleTodoAdd = ()=>{
    const task = todoTaskRef.current.value;

    if(task==='') return; //Me salgo y no hago nada.

    settodos((prevTodos)=>{
        return [...prevTodos, {id:uuidv4(), task:task,completed:false } ]
    })

    todoTaskRef.current.value = null;

  }

  const toggleTodo = (id)=>{
      const newTodos = [...todos]
      const todo = newTodos.find(todo => todo.id===id);

      todo.completed = !todo.completed;
      settodos(newTodos);

  }

  const handleClearAll = ()=>{
    const newTodos = todos.filter((todo)=>!todo.completed);
    settodos(newTodos);
  }

  return (
    <div className="App">
      <Header/>
      <div className="section-todolist">
          <div className="form">
                <input ref={todoTaskRef} type="text" id="todo" name="todo" placeholder="Nueva tarea...."/>
                <button
                    type="button"
                    className="btn-add-todo"
                    onClick={handleTodoAdd}>
                    ➕
                </button>
                <button
                  type="button"
                  className="btn-remove-todo"
                  onClick={handleClearAll}>
                  🗑️</button>
            </div>
      </div>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <hr/>

      <p className="task-pending">
        Te quedan {
          <span className="task-todo-count">{todos.filter(todo=>!todo.completed).length}</span>
        } por completar
      </p>

    </div>
  );
}

export default App;
