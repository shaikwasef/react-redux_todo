import React from "react";
import "./style.css";
import {createStore} from "redux"
import {todoApp} from "./reducers/todoApp"
import {useDispatch} from "react-redux";

let store  = createStore(todoApp ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

var nextToDoID=0 ;

export default function App() {

  console.log(store.getState());
  
  const list = store.getState().todos.map((todo) => {
    return (
      <li key = {todo.id}>{todo.text}</li> 
    );
  })
  return (
    <div>
      <button onClick = {() => store.dispatch({
        type : "ADD_TODO",
        text : "Test" ,
        id : nextToDoID++ 
      })}>Add Todo</button>
      <ul>
        {list}
      </ul>
    </div>
  );
}
