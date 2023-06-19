import React, { useState } from "react";
import Todo from "./components/Todo";
import "./App.css";

const App: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <h1>Put stuff in to do list</h1>
      <div className="todo-input">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a new todo..."
        />
      </div>
      <button className="add-button" onClick={addTodo}>
        Add Todo
      </button>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} text={todo} onDelete={() => deleteTodo(index)} />
        ))}
      </div>
    </div>
  );
};

export default App;
