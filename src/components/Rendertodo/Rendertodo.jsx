import React, { useContext, useEffect } from "react";
import { TodoContext } from "../../contexts/ToDoContext";
import { Button } from "../../components/ui/button";

export default function RenderTodo() {
  const {
    todos,
    fetchTodos,
    toggleTodo,
    deleteTodo,
    setSelectedId,
    selectedId,
  } = useContext(TodoContext);
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <div className="container mx-auto mt-5 p-5 bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl text-white font-semibold mb-5">Todo List</h2>

      {todos.length === 0 ? (
        <p className="text-gray-500">
          No todos available. Add some to get started!
        </p>
      ) : (
        <ul className="space-y-3">
          {todos
            .filter((todo) => selectedId !== todo._id)
            .map((todo) => (
              <React.Fragment key={todo._id}>
                <li
                  key={todo._id}
                  className={`flex justify-between items-center p-3 rounded-lg ${
                    todo.completed ? "bg-green-100" : "bg-gray-700"
                  }`}
                >
                  <span
                    onClick={() => toggleTodo(todo._id)} // Correct ID toggle ke liye use kare
                    className={`cursor-pointer text-lg ${
                      todo.completed
                        ? "line-through text-gray-500"
                        : "text-black"
                    }`}
                  >
                    {todo.title}
                  </span>
                  <Button
                    onClick={() => setSelectedId(todo._id)}
                    className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-md"
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => deleteTodo(todo._id)}
                    className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-md"
                  >
                    Delete
                  </Button>
                </li>
              </React.Fragment>
            ))}
        </ul>
      )}
    </div>
  );
}
