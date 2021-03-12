import React from "react";
import "./style.css";
import {useRef} from "react";

let nextToDoID = 0 ;

export default function AddTodo({onButtonClick}) {
  const inputField = useRef("");
  return (
    <div>
    <input ref={inputField} />
      <button
        onClick={ () => onButtonClick(inputField.current.value,nextToDoID++)}
      >
        Add Todo
      </button>
      </div>
  );
}
