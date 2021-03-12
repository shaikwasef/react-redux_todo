import React from "react";
import "./style.css";
import Todo from "./Todo";
import { useSelector, useDispatch } from "react-redux";
import { toggleToDo } from "./actions/toggleToDo";

//TodoList component
export default function TodoList({onTodoClick }) {
    //list of todoItems from todos reducer
  const todoItems = useSelector(state => state.todos);
  //visibility Filter from visibilityFilter reducer
  const visibility = useSelector(state => state.visibilityFilter);

  // dispatch hook
  const dispatch = useDispatch();

  //setVisibility for todoItems depending on the visibility filter
  const setVisibility = (todoItems, visibility) => {
    debugger;
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

  return (
    <ul>
      {visibleTodo.map(todo => {
        debugger
        return (
          <Todo
            key={todo.id}
            onClick={() => {
              dispatch(toggleToDo(todo.id));
            }}
            {...todo}
          />
        );
      })}
    </ul>
  );
}
