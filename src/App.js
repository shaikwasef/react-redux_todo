import React from "react";
import "./style.css";
import {createStore} from "redux"
import {todoApp} from "./reducers/todoApp"
import {useDispatch} from "react-redux";

let store  = createStore(todoApp ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.subscribe(()=>console.log(store.getState().todos));
var nextToDoID=0 ;


export default function App() {
  
  return (
    <div>
      <button onClick = {() => store.dispatch({
        type : "ADD_TODO",
        text : "Test" ,
        id : nextToDoID++ 
      })}>Add Todo</button>
      <ul>
       {store.getState().todos.map((todo) => {return (<li>hi</li>)})}
      </ul>
    </div>
  );
}
