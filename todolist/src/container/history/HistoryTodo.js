import React from 'react';
import './HistoryTodo.css';

const History = (props) => {
    return (
        <div className="History">
            {props.timeReport.map((list, index) => {
                return (
                        <li key={index}>
                            <span className="Action"><i className="fas fa-exclamation-circle"></i>{list.action} </span> 
                            <span className="Time"><i className="fas fa-clock"></i>{list.timeStamp}</span> 
                        </li>
                 ); 
            }).reverse()}
             {props.timeReport.length > 0 ? <button onClick={props.clearHistory}>Clear History</button>: null}
        </div>
    );
}

export default History;

