import React from "react";
import "./style.css";
import {todoApp} from "./reducers/todoApp"
import {useSelector , useDispatch} from "react-redux";
import {addToDo} from "./actions/addToDo";
import {toggleToDo} from "./actions/toggleToDo"
import {useRef} from "react";
import {setVisibilityFilter} from "./actions/setVisibilityFilter"
import TodoList from "./TodoList"

var nextToDoID=0 ;

export default function App(){
  const inputField = React.useRef(null);
  const todoItems = useSelector(state => state.todos);
  const visibility = useSelector(state => state.visibilityFilter);
  const setVisibility  = (todoItems,visibility) => {
      if(visibility == "ALL"){
        return todoItems ;
      }else if (visibility == "COMPLETED"){
        return todoItems.filter(
          todoItems => todoItems.completed == true
        )
      }else if(visibility  == "INCOMPLETE"){
        return todoItems.filter(
          todoItems => todoItems.completed == false 
        )
      }    
  }
  const visibleTodo = setVisibility(todoItems,visibility);
  
  const todo = visibleTodo.map((todo) =>  {
    debugger
    return (
      <Todo key = {todo.id}  onClick = {() =>
      {dispatch(toggleToDo(todo.id))}} {...todo} />
    );
  });
  const dispatch = useDispatch();

  const filter = (text,filter) => {
    if(visibility == filter){
      return <span>{text}</span>
    }
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
      <TodoList visibleTodo = {visibleTodo} onTodoClick = {() => {dispatch(toggleToDo())}}/>
      <div>
        SHOW : {filter("ALL","ALL")} {filter("COMPLETED","COMPLETED")} {filter("INCOMPLETE","INCOMPLETE")}
      </div>
    </div>
  );
}
