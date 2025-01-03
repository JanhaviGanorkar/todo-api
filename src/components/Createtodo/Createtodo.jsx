import React, { useState, useContext, useEffect } from "react";
import { TodoContext } from "../../contexts/ToDoContext";
import { Button } from "../ui/button";

export default function CreateTodo() {
  const { todos, addTodo, selectedId, setSelectedId, updateTodo } =
    useContext(TodoContext);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [newTodo, setNewTodo] = useState("");
  useEffect(() => {
    const foundTodo = todos.find((todo) => todo._id === selectedId);
    setSelectedTodo(foundTodo || null);
    if (foundTodo) setNewTodo(foundTodo.title);
  }, [selectedId, selectedTodo]);

  const handleAddTodo = async () => {
    if (newTodo.trim() !== "") {
      const newTodoItem = {
        title: newTodo,
        completed: false,
      };
      try {
        await addTodo(newTodoItem);
        setNewTodo("");
      } catch (error) {
        console.error("Error adding todo:", error);
      }
    }
  };

  const handleUpdateTodo = async (id) => {
    if (newTodo.trim() !== "") {
      const updatedTodoItem = {
        title: newTodo,
        completed: selectedTodo.completed,
      };

      try {
        await updateTodo(id, updatedTodoItem);
        setNewTodo("");
        setSelectedId(null);
        setSelectedTodo(null);
      } catch (error) {
        console.error("Error updating todo:", error);
      }
    }
  };

  return (
    <div className="container bg-gray-800 p-5 rounded-md shadow-md">
      <input
        type="text"
        value={newTodo.length > 0 ? newTodo : ""}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder={selectedTodo ? "Edit your todo" : "Add a new todo"}
        className="p-2 border rounded-md w-full bg-slate-600 mb-3"
      />

      {!selectedTodo ? (
        <Button
          onClick={handleAddTodo}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Add Todo
        </Button>
      ) : (
        <Button
          onClick={() => handleUpdateTodo(selectedTodo._id)} // Pass the selected todo's ID
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
        >
          Update Todo
        </Button>
      )}
    </div>
  );
}
