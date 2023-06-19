import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

interface TodoProps {
  text: string;
  onDelete: () => void;
}

const Todo: React.FC<TodoProps> = ({ text, onDelete }) => {
  const [completed, setCompleted] = useState(false);

  const handleClick = () => {
    setCompleted(!completed);
  };
  return (
    <div className={`todo ${completed ? "completed" : ""}`}>
      <span
        className={`todo-text ${completed ? "completed" : ""}`}
        onClick={handleClick}
      >
        {text}
      </span>
      <button className="delete-button" onClick={onDelete}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};

export default Todo;
