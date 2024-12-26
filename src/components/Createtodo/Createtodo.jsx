import React, { useState, useContext } from 'react';
import { TodoContext } from '../../contexts/ToDoContext'; // Import TodoContext
import { Button } from '../ui/button'; // Import your Button component
import 'boxicons';

export default function CreateTodo() {
  const { addTodo } = useContext(TodoContext); // Access addTodo from context
  const [newTodo, setNewTodo] = useState(''); // State for new todo text
  

  const handleAddTodo = async () => {
    if (newTodo.trim() !== '') {
      const newTodoItem = {
        title: newTodo,
        completed: false,
      };

      try {
        await addTodo(newTodoItem); // Send new todo to API
        setNewTodo(''); // Clear input field after adding todo
      } catch (error) {
        console.error('Error adding todo:', error);
      }
    }
  };

  return (
    <div className="container bg-gray-800 p-5 rounded-md shadow-md">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
        className="p-2 border rounded-md w-full bg-slate-600 mb-3"
      />
      <Button
        onClick={handleAddTodo}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Add Todo
      </Button>
      <box-icon name="plus-circle" color="blue"></box-icon>
    </div>
  );
}
