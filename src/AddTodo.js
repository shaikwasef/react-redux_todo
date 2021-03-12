import React from "react";
import "./style.css";
import { useRef } from "react";

//id for new todo item (updated in  button after each submit)
var nextToDoID = 0;

export default function AddTodo({ onButtonClick }) {
  const inputField = useRef("");
  return (
    <div>
      <input ref={inputField} />
      <button
        onClick={() => {
          onAddTodoClick(inputField.current.value, nextToDoID++);
        }}
      >
        Add Todo
      </button>
    </div>
  );
}
