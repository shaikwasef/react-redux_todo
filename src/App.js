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

  const visibility = useSelector(state => state.visibilityFilter);

  // // dispatch hook
  const dispatch = useDispatch();

  return (
    <div>
      <AddTodo

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
