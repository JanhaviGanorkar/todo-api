import { useEffect, useState } from "react";
import { getTodos } from "./api/todoapi";
import Createtodo from "./components/Createtodo/Createtodo";
import Rendertodo from "./components/Rendertodo/Rendertodo";
function App() {
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const todos = await getTodos();
  };

  return (
    <>
      <div>
        <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">
              Manage Your Todos
            </h1>
            <Createtodo />
            <Rendertodo />
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default App;
