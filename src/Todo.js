import React from "react";
import "./style.css";
import Todo from "./Todo";

//Todo item component
export default function Todo({ onClick, completed, text }) {
  return (
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? "line-through" : "none"
      }}
    >
      {text}
    </li>
  );
}
