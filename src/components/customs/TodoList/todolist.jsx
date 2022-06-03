import React from 'react'
import Todo from './../Todo/todo';


function TodoList({ todos , setTodos , setInput , setIsEditing , isEditing , setEditId}) {
    // console.log(todos);

    return todos.map((todo) => 
        <Todo setInput={setInput} todos={todos} setTodos={setTodos} textTodo={todo.text} idTodo={todo.id} todoBg={todo.backgroundColor} setIsEditing={setIsEditing} setEditId={setEditId}>
        </Todo>
    );
}

export default TodoList