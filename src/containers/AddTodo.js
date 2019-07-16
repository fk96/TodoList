import React from "react";
import { addTodo } from "../actions/todo.actions";
import { connect } from "react-redux";
import "../components/App.css";

let AddTodo=({dispatch})=>{
  let input
  
  return(
      <div>
          <form style={{marginBottom:"10px",marginLeft:"8px"}} onSubmit={e=>{
              e.preventDefault()
              if(!input.value.trim()){
                  return 
              }
              dispatch(addTodo(input.value))
              input.value=""
          }} >
          <input
              ref={node=>{
                  input=node
              }}
              />
              <button className="mybutton" type="submit">Add to List</button>    
          </form>
      </div>
  )
  
}


export default connect()(AddTodo);