import React from "react";
import "./style.css";

export default function Filter({visibility,text,filter,onFilterClick}){
    const display = (visibility,text, filter,onFilterClick) => {
    if (visibility == filter) {
      return <span>{text}</span>;
    }
      return (
        <a
          href="#"
          onClick ={(filter) => {onFilterClick(filter)}}>
          {text}
        </a> 
      );
    };
    return (
    <div>
    {display(visibility,filter,text,onFilterClick)} 
    </div>);
}
