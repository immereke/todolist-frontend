import React from "react";

const Todolist = (props) => {

    return(
        <div>
            <p>{props.todo.title}&nbsp;
                <button onClick={props.deleteTodo}>&#215;</button>
            </p>
        </div>
    )
};

export default Todolist