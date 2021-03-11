import React from "react";
import "./style.css";
import {createStore} from "redux"
import {todoApp} from "./reducers/todoApp"
import {useSelector , useDispatch} from "react-redux";


let store  = createStore(todoApp ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.subscribe(App);
var nextToDoID=0 ;


export default function App() {
  const todos = store.getState().todos;
  console.log(todos);
  return (
    <div>
      <button onClick = {() => store.dispatch({
        type : "ADD_TODO",
        text : "Test" ,
        id : nextToDoID++ 
      })}>Add Todo</button>
      <ul>
      
      </ul>
    </div>
  );
}
