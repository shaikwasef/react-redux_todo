import React from "react";
import "./style.css";
import {createStore} from "redux"
import {todoApp} from "./reducers/todoApp"
import {useSelector , useDispatch} from "react-redux";
import {addToDo} from "./actions/addToDo";
import {toggleToDo} from "./actions/toggleToDo"
import {useRef} from "react";
import {setVisibilityFilter} from "./actions/setVisibilityFilter"

var nextToDoID=0 ;

export default function App(){
  const inputField = React.useRef(null);
  const todoItems = useSelector(state => state.todos);
  const visibility = useSelector(state => state.visibilityFilter);
  const setVisibility  = (todoItems,visibility) => {
      if(visibility == "all"){
        return todoItems ;
      }else if (visibility == "completed"){
        return todoItems.filter(
          todoItems => todoItems.completed == true
        )
      }else if(visibility  == "incomplete"){
        return todoItems.filter(
          todoItems => todoItems.completed == false 
        )
      }    
  }
  const visibleTodo = setVisibility(todoItems,visibility);
  const list = visibleTodo.map((todo) =>  {
    return (
      <li key = {todo.id} onClick = {() =>
      {dispatch(toggleToDo(todo.id))}}
      style={{
                  textDecoration:
                    todo.completed ?
                      'line-through' :
                      'none'
                }} >{todo.text}</li>
    );
  });
  const dispatch = useDispatch();

  const filter = (text,filter) => {

    return (
      <a href ='#' onClick = {() => {dispatch(setVisibilityFilter(filter))}}>{text}</a>
    );
  }
  return (
    <div>
      <input ref={inputField} />
      <button onClick = {() => {dispatch(addToDo(inputField.current.value , nextToDoID++));
      inputField.current.value = ""
      }} >Add Todo</button>
      <ul>
      {list}
      </ul>
      <div>
        SHOW : {filter("ALL","ALL")} {filter("COMPLETED","ALL")} {filter("INCOMPLETE","INCOMPLETE")}
      </div>
    </div>
  );
}
