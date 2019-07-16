import React from "react";

const Todo = ({ text, complete, onClick }) => {
  return (
    <li 
      className="list-group-item"
      onClick={onClick}
      style={{marginBottom:"10px",textDecoration: complete ? "line-through" : "none" }}
    >
      {text}
    </li>
  );
};

export default Todo;
