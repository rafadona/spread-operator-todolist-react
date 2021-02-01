import React from "react";


function ToDoItem(props) {

    return (
        <div onClick={() => {
            props.clicado(props.id);

        }}
        >

            <li>{props.text}</li>

        </div>
    );
}

export default ToDoItem;