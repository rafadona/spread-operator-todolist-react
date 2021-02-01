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

  function deleteItem(id){
    setItems(prevItems =>{
      return prevItems.filter((item,index)=>{
        return index !== id;
      })
    })

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
          {items.map((todoItem, index) => (
            <ToDoItem key={index} id={index} text= {todoItem} clicado={deleteItem}/>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
