import React from "react";
import '../style.css'

const Todolist = (props) => {

    const ActionBtn = () =>
        <div>{!props.todo.completed ? <button onClick={props.completedTodo}>&#10004;</button> :
            <button onClick={props.deleteTodo}>X</button>}</div>;

    return (
        <div className='ActionBtn'>
            {props.todo.title}
            <ActionBtn/>
        </div>
    )
};

export default Todolist