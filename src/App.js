import React from "react";
import "./style.css";
import {createStore} from "redux"
import {todoApp} from "./reducers/todoApp"
import {useSelector , useDispatch} from "react-redux";
import {addToDo} from "./actions/addToDo";
import {toggleToDo} from "./actions/toggleToDo"

var nextToDoID=0 ;

export default function App(){
  const todos = useSelector(state => state.todos);
  const list = todos.map((todo) =>  {
    return (
      <li key = {todo.id}>{todo.text}</li>
    );
  });
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick = {() => dispatch(addToDo())}>Add Todo</button>
      <ul>
      {list}
      </ul>
    </div>
  );
}
