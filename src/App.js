//import files
import React from "react";
import "./style.css";
import { todoApp } from "./reducers/todoApp";
import { useSelector, useDispatch } from "react-redux";
import { addToDo } from "./actions/addToDo";
import { toggleToDo } from "./actions/toggleToDo";
import { useRef } from "react";
import { setVisibilityFilter } from "./actions/setVisibilityFilter";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

//id for new todo item (updated in addTodo button)
var nextToDoID = 0;

export default function App() {


  //list of todoItems from todos reducer
  const todoItems = useSelector(state => state.todos);
  //visibility Filter from visibilityFilter reducer
  const visibility = useSelector(state => state.visibilityFilter);

  // dispatch hook
  const dispatch = useDispatch();

  //setVisibility for todoItems depending on the visibility filter
  const setVisibility = (todoItems, visibility) => {
    if (visibility == "ALL") {
      return todoItems;
    } else if (visibility == "COMPLETED") {
      return todoItems.filter(todoItems => todoItems.completed == true);
    } else if (visibility == "INCOMPLETE") {
      return todoItems.filter(todoItems => todoItems.completed == false);
    }
  };

  //visible Todo item based on the visibility filter reducer
  const visibleTodo = setVisibility(todoItems, visibility);

  // Filter component showing ALL , COMPLETED and INCOMPLETE
  const filter = (text, filter) => {
    if (visibility == filter) {
      return <span>{text}</span>;
    }
    return (
      <a
        href="#"
        onClick={() => {
          dispatch(setVisibilityFilter(filter));
        }}
      >
        {text}
      </a>
    );
  };

  //App components
  return (
    <div>
    <AddTodo OnButtonClick = {(inputvalue,todoId) => {dispatch(addToDo(inputvalue , todoId))}} />
      
      <TodoList
        visibleTodo={visibleTodo}
        onTodoClick={id => {
          dispatch(toggleToDo(id));
        }}
      />
      <div>
        SHOW : {filter("ALL", "ALL")} {filter("COMPLETED", "COMPLETED")}{" "}
        {filter("INCOMPLETE", "INCOMPLETE")}
      </div>
    </div>
  );
}
