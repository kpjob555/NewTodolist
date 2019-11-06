import React, {useState} from 'react';
import './TodoList.css';

const TodoList = (props) => {
    const [isEdit, setIsEdit] = useState([]); // Array of true or false to check list is already edit yet. true is edit , false is done
    const [editedTodo, setEditedTodo] = useState('');
    
    const addEdit = (index) => {
        const updateState = [...isEdit];
        updateState[index] = true;
        setIsEdit(updateState);
    }

    const doneEdit = (index) => {
        const updateState = [...isEdit];
        updateState[index] = false;
        setIsEdit(updateState);
        
        props.onUpdateTodo(editedTodo, index);
        
        setEditedTodo('');
    }

    const checkboxIsCheck = (status, index) => {
        props.onCheckbox(!status, index);
    }

    return (
        <div className="List">
            {props.list.length > 0 ? <h4>In process...</h4>: null}
            <ul>
                {props.list.map((ls, index) => {
                    
                        return (
                        <li key={index} className="List-Todo">
                        
                            <input
                                className="checkbox" 
                                type="checkbox"
                                onChange={() => checkboxIsCheck(ls.status, index)}
                                checked={ls.status}
                                
                            />
                            
                            
                            {isEdit[index] ? 
                                <input type="text" onChange={(event) => setEditedTodo(event.target.value)} value={editedTodo} placeholder={ls.todo} className="inputEdit"/>
                                : <span onClick={() => addEdit(index)} className="ShowList">{ls.todo}</span>
                                }

                            {isEdit[index] ? 
                                <i className="fas fa-check" type="submit" onClick={() => {doneEdit(index)}}></i>
                                : null}
                            {!isEdit[index] ? 
                                    <i style={{"cursor": "pointer"}} className="fas fa-trash-alt" onClick={props.onRemove.bind(this, ls.id)}></i>
                                : <span className="onEdit">On Editing...</span>
                                }
                            {ls.status && !isEdit[index] ?<i className="far fa-check-circle" onClick={() => props.toFinished(index)}></i>: null}
                    </li>
                    );
                }).reverse()}
            </ul>
        </div>
    );
}

export default TodoList;
