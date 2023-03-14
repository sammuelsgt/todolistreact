import React, { useState } from "react";

function TodoList() {
  const [todoItems, setTodoItems] = useState([]);
  const [isDone, setisDone] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodoItems([...todoItems, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodoItems = [...todoItems];
    newTodoItems.splice(index, 1);
    setTodoItems(newTodoItems);
  };

  const handleToggleComplete = (index) => {
    const newTodoItems = [...todoItems];
    newTodoItems[index].completed = !newTodoItems[index].completed;
    setTodoItems(newTodoItems);
  };

  const handleToggleisDone = () => {
    setisDone(!isDone);
  };

  const filterItems = isDone
    ? todoItems.filter((item) => !item.completed)
    : todoItems;
  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Enter a todo item..."
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
      <button onClick={handleToggleisDone}>
        {isDone ? "Show Finished" : "Hide Finished"}
      </button>
      <ul>
        {filterItems.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => handleToggleComplete(index)}
            />
            
              {item.text}
         
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;