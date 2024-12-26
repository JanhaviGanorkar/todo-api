import React, { useContext, useEffect } from 'react';
import { TodoContext } from '../../contexts/ToDoContext'; // Import the TodoContext
import { Button } from '../../components/ui/button'; // Optional ShadCN button for styling

export default function RenderTodo() {
  const { todos, fetchTodos, toggleTodo, deleteTodo, updateTodo } = useContext(TodoContext);

  useEffect(() => {
    fetchTodos(); // Fetch todos when the component mounts
  }, [fetchTodos]);

  return (
    <div className="container mx-auto mt-5 p-5 bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl text-white font-semibold mb-5">Todo List</h2>

      {todos.length === 0 ? (
        <p className="text-gray-500">No todos available. Add some to get started!</p>
      ) : (
        <ul className="space-y-3">
          {todos.map((todo) => (
            
            <li
            key={todo._id}            
              className={`flex justify-between items-center p-3 rounded-lg ${
                todo.completed ? 'bg-green-100' : 'bg-gray-700'
              }`}
            >
              <span
                onClick={() => toggleTodo(todo.id)}
                className={`cursor-pointer  text-lg ${
                  todo.completed ? 'line-through text-gray-500' : 'text-black'
                }`}
              >
                {todo.title}
              </span>

              {/* Delete Button */}
              <Button
                onClick={() => updateTodo(todo._id)}
                className="bg-green-500 hover:bg-green-600 text-white pl-37 p-2 rounded-md"
              >
                Update
              </Button>
              <Button
                onClick={() => deleteTodo(todo._id)}
                className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-md"
              >
                Delete
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
