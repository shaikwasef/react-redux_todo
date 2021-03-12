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
import Filter from  "./Filter";


export default function App() {
  // //list of todoItems from todos reducer
  // const todoItems = useSelector(state => state.todos);
  // //visibility Filter from visibilityFilter reducer
  const visibility = useSelector(state => state.visibilityFilter);

  // // dispatch hook
  const dispatch = useDispatch();

  // //setVisibility for todoItems depending on the visibility filter
  // const setVisibility = (todoItems, visibility) => {
  //   debugger;
  //   if (visibility == "ALL") {
  //     return todoItems;
  //   } else if (visibility == "COMPLETED") {
  //     return todoItems.filter(todoItems => todoItems.completed == true);
  //   } else if (visibility == "INCOMPLETE") {
  //     return todoItems.filter(todoItems => todoItems.completed == false);
  //   }
  // };

  // //visible Todo item based on the visibility filter reducer
  // const visibleTodo = setVisibility(todoItems, visibility);
  // console.log(visibleTodo);
  //App components
  return (
    <div>
      <AddTodo
      onAddtodoClick={(input,id) => {
          dispatch(addToDo(input,id))}}
      />

      <TodoList/>
      <div>
        SHOW : 
        <div>
        <Filter visibility = {visibility} text = 'ALL' filter = 'ALL' onFilterClick = {(filter) => {dispatch(setVisibilityFilter(filter))}}/>
        <Filter visibility = {visibility} text = 'COMPLETED' filter = 'COMPLETED' onFilterClick = {(filter)=> {dispatch(setVisibilityFilter(filter))}}/>
        <Filter visibility = {visibility} text = 'INCOMPLETE' filter ='INCOMPLETE' onFilterClick = {(filter) => {dispatch(setVisibilityFilter(filter))}}/>
        </div>
      </div>
    </div>
  );
}
