import React from "react";
import AddTodo from "../containers/AddTodo";
import TodoList from "../containers/TodoList";
import Footer from "../containers/Footer";
import Header from "./Header"
import "./App.css";
const App = () => (
  <div className="App">
    <div className="components">
      
      <Header/>
      <AddTodo />
      <TodoList />
      <Footer />
    </div>
  </div>
);

export default App;
