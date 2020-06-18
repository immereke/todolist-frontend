import React from "react";

function Todolist(props) {
    return(
        <div className="Todolist">
            {props.todo.title}
            <input type="checkbox"
                   defaultChecked={props.todo.completed}
                   onChange={props.handleChange}
            />

        </div>
    )

}

export default Todolist