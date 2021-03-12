import React from "react";
import "./style.css";
import { useRef } from "react";

//id for new todo item (updated in  button after each submit)
var nextToDoID = 0;

export default function AddTodo({onAddtodoClick}) {
  const inputField = useRef("");
  return (
    <div>
      <input ref={inputField} />
      <button
        onClick={() => {
          onAddtodoClick(inputField.current.value, nextToDoID++);
          inputField.current.value = "";
        }}
      >
        Add Todo
      </button>
    </div>
  );
}
