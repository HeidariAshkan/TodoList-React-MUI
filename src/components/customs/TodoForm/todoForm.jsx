import { Button, Paper, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useStyles } from './todoForm.style';

function TodoForm({ todos , setTodos , input , setInput, isEditing , setIsEditing , editId , }) {

    const classes = useStyles();
     
    const handelChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {

        if(isEditing){
            e.preventDefault();
            const todo = todos.map((todo)=>{
                if(todo.id === editId){
                    return {
                        id: todo.id,
                        text: input,
                        backgroundColor: todo.backgroundColor
                    }
                }
                return todo;
            })

            setTodos(todo)
            setInput('');
            setIsEditing(false);

        }
        else{

            e.preventDefault();
    
            const randomNumber = Math.random().toString(16).substr(-6);
            // console.log(randomNumber);
            const todo = {
                id: Date.now(),
                text: input,
                backgroundColor: randomNumber
            }
    
            addTodo(todo);
            setInput('');
        }
    
    }
    const addTodo = (todo) => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    }
  return (
    <>
    <Paper className={classes.form}>
        <Box className={classes.div}>
            <TextField id="filled-basic" 
            className={classes.todoText}
            onChange={handelChange}
            value={input}
            variant="filled"
            label="Add Todo"
            />

            <Button className={classes.btnAdd} onClick={handleSubmit}>{isEditing ? "Edit" : "Add"}</Button>
        </Box>
    </Paper>
    </>
  )
}

export default TodoForm