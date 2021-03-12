import React from "react";
import "./style.css";
import { useRef } from "react";
import {useSelector,useDispatch} from  "react-redux"
import addToDo from "./action/addToDo";

//id for new todo item (updated in  button after each submit)
var nextToDoID = 0;

export default function AddTodo({onAddtodoClick}) {
  const dispatch = useDispatch();
  const inputField = useRef("");
  return (
    <div>
      <input ref={inputField} />
      <button
        onClick={() => {
          dispatch(addToDo(inputField.current.value, nextToDoID++));
          inputField.current.value = "";
        }}
      >
        Add Todo
      </button>
    </div>
  );
}
