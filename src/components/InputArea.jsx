import React from "react";



function InputArea(props) {

    var [newText, setNewText] = React.useState("");

    function handleChange(event) {
        const text = event.target.value;
        setNewText(text)
    }

    return (
        <div className="form">
            <input name="newItem" type="text" onChange={handleChange} autoFocus={true} value={newText} />
            <button onClick={() => {
                props.addItem(newText);
                setNewText("");

            }}>
                <span>Add</span>
            </button>
        </div>)
}


export default InputArea;