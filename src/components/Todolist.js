import React from "react";

function Todolist({todo, ...props}) {
    return(
        <div className="Todolist">
            {todo.title}
            <input type="checkbox"
                   checked={props.completed}
                   onChange={props.handleChange}
            />

        </div>
    )

}
 export default Todolist