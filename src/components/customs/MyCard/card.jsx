import { Box } from '@mui/system'
import React , { useState } from 'react'
import { UseStyles } from './card.style';
import { Card } from '@mui/material';
import TodoForm from './../TodoForm/todoForm';
import Todolist from './../TodoList/todolist';
import { useEffect } from 'react'



function MyCard() {
  const classes = UseStyles()

  const todosLC = localStorage.getItem('todos')

  const [input, setInput] = useState('');
  const [todos, setTodos] = useState(JSON.parse(todosLC));
  const[isEditing, setIsEditing] = useState(false);
  const[editId, setEditId] = useState(null);

  useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  return (
    <Card className={classes.card}>
          <Box components={"cardHeader"}>
            <Box className={classes.cardHeader} components={"div"}>
              <h3>
                Feelin' productive today?
              </h3>
            </Box>
            <TodoForm todos={todos} setTodos={setTodos} input={input} setInput={setInput} isEditing={isEditing} setIsEditing={setIsEditing} editId={editId}/>
          </Box>
          <Box components={"cardBody"}>
            <Todolist setInput={setInput} todos={todos} setTodos={setTodos} setIsEditing={setIsEditing} isEditing={isEditing} setEditId={setEditId}/>
          </Box>
    </Card>
  )
}

export default MyCard