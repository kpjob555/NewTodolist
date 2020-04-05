import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core'
import './AddForm.css';

const useStyle = makeStyles({
    buttonStyle: {
        background: 'linear-gradient(90deg, rgba(13,71,161,1) 0%, rgba(3,169,244,1) 100%)',
        fontFamily: 'Roboto Slab, serif',
        color: 'white',
        height: '50px',
        width: '150px',
        '&:hover': { background: 'linear-gradient(90deg, rgba(3,169,244,1) 0%, rgba(13,71,161,1) 100%)'},
        
    },
    
    TextField: {
        width: '600px'
    },
    buttonStyleHover: {

    }

});

const AddForm = (props) => {
    const [ todoInput, setTodoInput ] = useState('');

    const classes = useStyle();

    const sendTodoInput = (event) => {
        event.preventDefault();
        props.onAddTodo({ todo: todoInput});
        setTodoInput('');
    }

    return(
        <div>
            <form onSubmit={sendTodoInput}>
                <section className="onTextfield">
                    <TextField
                        type="text" 
                        onChange={event => setTodoInput(event.target.value)} 
                        value={todoInput} 
                        placeholder="TEXT HERE" 
                        className={classes.TextField}
                        label="Todolist"
                        margin="normal"
                        variant="outlined"
                /></section>
                <section className="onButton">
                    <Button 
                        type="submit"
                        variant="contained"
                        className={classes.buttonStyle}
                        >Submit</Button></section>
                
            </form>
        </div>
    );
}

export default AddForm;