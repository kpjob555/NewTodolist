import React, { useState } from 'react';
import AddFrom from '../../components/Add-Form/AddForm';
import TodoList from '../../components/Todo-List/TodoList';
import History from '../history/HistoryTodo';
import moment from 'moment';
import Finished from '../../components/FinishedList/FinishedList';
import { Route } from 'react-router-dom';


const Todolist = (props) => {
    const [ todos , setTodos] = useState([]);
    const [ timeStamp, setTimeStamp ] = useState([]);
    const [completeTodos, setCompleteTodos] = useState([]);
    
    const addTodo = (inTodo) => {
        if(inTodo.todo === '') {
            inTodo.todo = 'New Undefined Todo'
        }
        setTodos(prevTodo => [
            ...prevTodo, { id: Math.random().toString(), ...inTodo, status: false}
        ]);
        setHistory('Add new todo')
    }

    const removeTodo = (todoID) => {
        setTodos(prevTodo => prevTodo.filter(todols => todols.id !== todoID));
        setHistory('Remove todo')
    }

    const editTodo = (updateTodo, todoID) => {
       const update = [...todos];
        if(updateTodo === '') {
            update[todoID] = {todo: 'Undefined Todo', status: false}
        } else {
            update[todoID] = {todo: updateTodo, status: false};
        }
       setHistory(`${todos[todoID].todo} is about to update to ${update[todoID].todo}`)
       setTodos(update);
    }

    const checkbox = (statusUpdate, todoID) => {
        const updateStatus = [...todos];
        
        updateStatus[todoID] = {todo: todos[todoID].todo, status: statusUpdate};
        setTodos(updateStatus);
        setHistory(`Checkbox was turn to ${statusUpdate? 'ON': 'OFF'}`);
    }

    const setHistory = (action) => {
        setTimeStamp(prevTime => [
            ...prevTime, {action: action ,timeStamp:moment().format('MMMM Do YYYY, hh:mm:ss a') }
        ]);
    }

    const setFinished = (todoID) => {
        const finishedTodo = [...todos];
        const focusTodo = finishedTodo[todoID].todo;
        setCompleteTodos(prevComplete => [...prevComplete, {todo: focusTodo} ]);
        finishedTodo.splice(todoID, 1);
        setTodos(finishedTodo);
        setHistory(`${todos[todoID].todo} is submitted to Finished Directory`)
    }

    return (
        <React.Fragment>
            <Route exact path="/" render={() => (
                <React.Fragment>
                    <AddFrom
                        onAddTodo={addTodo}
                    />
                    <TodoList
                        list={todos}
                        onEdit={editTodo}
                        onRemove={removeTodo}
                        onUpdateTodo={editTodo}
                        onCheckbox={checkbox}
                        toFinished={setFinished}
                    />
                    <Finished 
                        finishList={completeTodos}
                    />
                </React.Fragment>
            )} />
            
            <Route exact path="/history" render={() => (
                <React.Fragment>
                    <History 
                        timeReport={timeStamp}
                        clearHistory={() => setTimeStamp([])}
                    />
                </React.Fragment>
            )} />
        </React.Fragment>
    );
}

export default Todolist;