
import React from 'react';

const TodoForm = props => {
    return (
        <div>
        <form onSubmit={props.addNewTodo}>
        <input type='text' name="newTodo" onChange={props.changeHandler} value={props.newTodo}/>
        <button type='submit' onClick={props.addNewTodo}>New Chore</button>
        </form>
        <button onClick={props.clear}>Clear Completed Chores</button>
        </div>
    )
}

export default TodoForm;