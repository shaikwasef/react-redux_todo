import React from "react";
import "./style.css";
import {createStore} from "redux"
import {todoApp} from "./reducers/todoApp"
import {useSelector , useDispatch} from "react-redux";
import {addToDo} from "./actions/addToDo";
import {toggleToDo} from "./actions/toggleToDo"
import {useRef} from "react";

var nextToDoID=0 ;

export default function App(){
  const inputField = React.useRef(null);
  const todoItems = useSelector(state => state.todos);
  const list = todoItems.map((todo) =>  {
    return (
      <li key = {todo.id}>{todo.text}</li>
    );
  });
  const dispatch = useDispatch();
  return (
    <div>
      <input ref={inputField} />
      <button onClick = {() => {dispatch(addToDo(inputField.current.value , nextToDoID++));
      inputField.current.value = ""
      }} >Add Todo</button>
      <ul>
      {list}
      </ul>
    </div>
  );
}
