import React from "react";

const Todolist = (props) => {

    return(
        <div>
            {props.todo.title}
            <button onClick={props.deleteTodo}>&#215;</button>
        </div>
    )
};

export default Todolist