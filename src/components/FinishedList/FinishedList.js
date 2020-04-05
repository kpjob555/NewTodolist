import React from 'react';
import './FinishedList.css';

const Finished = (props) => {
    return (
        <React.Fragment>
            {props.finishList.length > 0 ? <h4>Finished</h4>: null}
            <ul className="FinList">
                {props.finishList.map((list, index) => (
                        <li key={index}><span>{list.todo}</span></li>
                )).reverse()}
            </ul>
        </React.Fragment>
    );
}

export default Finished;