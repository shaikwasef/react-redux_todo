import React from "react";
import "./style.css";
import Todo from "./Todo";

//TodoList component
export default function TodoList({visibleTodo, onTodoClick }) {
  
  return (
    <ul>
      {visibleTodo.map(todo => {
        debugger
        return (
          <Todo
            key={todo.id}
            onClick={() => {
              onTodoClick(todo.id);
            }}
            {...todo}
          />
        );
      })}
    </ul>
  );
}
