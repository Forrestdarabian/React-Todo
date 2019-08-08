import React from 'react';
import './Todo.css'


const Todo  = props => {
    return (
        <div>
            <h3 onClick={() => props.toggleCompleted(props.id)} className={props.completed === true ? 'completedTodo' : null}>{props.task}</h3>
        </div>
    )
 }





export default Todo;