import React from "react";
import Navbar from "../components/Navbar";
import TodoList from "../components/TodoList";

const TodolistPage = () => {
  return (
    <>
      <div className="flex flex-col h-screen bg-gray-700">
        <Navbar />
        <TodoList />
      </div>
    </>
  );
};

export default TodolistPage;
