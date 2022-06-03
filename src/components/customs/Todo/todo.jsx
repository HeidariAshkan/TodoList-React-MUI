import { Container, IconButton } from '@mui/material';
import React from 'react'
import { Box } from '@mui/system';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import EditIcon from '@mui/icons-material/Edit';
import { useStyles } from './todo.style'


function Todo({ textTodo , idTodo, todoBg , setTodos , todos , setInput ,setIsEditing , setEditId}) {

    const classes = useStyles();

    const handleDelete = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
        console.log(todos)
    }
    
    const handleEdit = (id) => {
        setIsEditing(true);
        setEditId(id);
        const todo = todos.find(todo => todo.id === id);
        setInput(todo?.text || ''); 
    }


  return (
    <Container className="my-2">
         <Box components={"section"} >
            <Box className={classes.todo} sx={{backgroundImage: `linear-gradient(to left, ${"#" + todoBg} 100%,  ${"#" + todoBg} 50%, ${"#" + todoBg} 0% )`,}}>
                <div className={classes.text}>
                    {textTodo}
                </div>
                <div>
                <IconButton aria-label="delete">
                    <HighlightOffIcon className={classes.icon} onClick={()=> handleDelete(idTodo)}/>
                </IconButton>
                <IconButton aria-label="edit">
                    <EditIcon className={classes.icon} onClick={()=> handleEdit(idTodo)}/>
                </IconButton>
                </div>
            </Box>
        </Box>
    </Container>
  )
}

export default Todo