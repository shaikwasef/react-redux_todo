import React from "react";
import "./style.css";
import {createStore} from "redux"
import {todoApp} from "./reducers/todoApp"
import {useDispatch} from "react-redux";

let store  = createStore(todoApp ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.subscribe(()=>console.log(store.getState().todos));
var nextToDoID=0 ;


export default function App(props) {
  
  return (
    <div>
      <button onClick = {() => store.dispatch({
        type : "ADD_TODO",
        text : "Test" ,
        id : nextToDoID++ 
      })}>Add Todo</button>
      <ul>
       {props.todos.forEach((todo) => {alert(hi)})}
      </ul>
    </div>
  );
}
