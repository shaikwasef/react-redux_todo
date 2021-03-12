import React from "react";
import "./style.css";
import Todo from "./Todo"

export default function TodoList({visibileTodo,onTodoClick}) {
  return (
    <ul>
    {visibileTodo.map((todo) => {return  (
    <Todo key={key.id} onClick = {onTodoClick} {...todo}/>);})}
    </ul>
  );
}



