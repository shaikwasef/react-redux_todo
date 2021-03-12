import React from "react";
import "./style.css";

export default function Filter({visibility,text,filter,onFilterClick}){
    const display = (text) => { return (<div>{text}</div>
    );}
       
    
    return (
    <div>
    {display}
    </div>);
}

// debugger
//       if (visibility == filter) {
//         return <span>{text}</span>;
//       }
//       else  if(visibility != filter)


// {return (
//         <a
//           href="#"
//           onClick={(filter) => onFilterClick(filter)}>
//           {text}
//         </a> );