import React from "react";
import "./style.css";
import {createStore} from "redux"
import {todoApp} from "./reducers/todoApp"
import {useSelector , useDispatch} from "react-redux";



var nextToDoID=0 ;

export default function App(){
  const todo = useSelector(state => state.todos);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick = {() => store.dispatch({
        type : "ADD_TODO",
        text : "Test" ,
        id : nextToDoID++ 
      })}>Add Todo</button>
      <ul>11
        {list}
      </ul>
    </div>
  );
}
