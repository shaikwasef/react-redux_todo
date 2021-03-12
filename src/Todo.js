import React from "react";
import "./style.css";
import Todo from "./Todo"

//Todo item component
export default function Todo({onClick,completed,text}) {
  return (
    <li onClick = {onClick} style={{
                  textDecoration:
                    completed ?
                      'line-through' :
                      'none'
                }}>{text}</li>
  );
}













//  visibleTodo.map((todo) =>  {
//     return (
//       <li key = {todo.id} onClick = {() =>
//       {dispatch(toggleToDo(todo.id))}}
//       style={{
//                   textDecoration:
//                     todo.completed ?
//                       'line-through' :
//                       'none'
//                 }} >{todo.text}</li>
//     );
//   });