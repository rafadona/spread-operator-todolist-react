import React from "react";
import ToDoItem from "./ToDoItem"

function App() {

  var [newText, setNewText] = React.useState("");
  const [items, setItems] = React.useState([]);


  function handleChange(event) {
    const text = event.target.value;
    setNewText(text)
  }

  function addItem() {

    setItems(prevItems => {
      return [...prevItems, newText];
    });
    setNewText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input name="newItem" type="text" onChange={handleChange} autoFocus={true} value={newText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>      
        <ul>
          {items.map(todoItem => (
            <ToDoItem text= {todoItem} />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;




//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s
