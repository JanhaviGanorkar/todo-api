import React, { createContext, useState, useCallback } from 'react';
import axiosInstance from '../utils/utils';
import Todoapi from '../api/todoapi';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = useCallback(async () => {
    try {
      const res = await axiosInstance.get('/todos');
      setTodos(res.data.data); // Adjust based on API response structure
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  }, []); // Empty dependency array ensures the function doesn't change on re-renders

  const addTodo = async (todo) => {
    await Todoapi.addTodo(todo)
    setTodos([...todos, todo]);
    // Function to add a new todo
  };

  const deleteTodo = async (id) => {
    await Todoapi.deleteTodo(id)
    setTodos(todos.filter((todo) => todo._id !== id));
  }
  const updateTodo = async (id) => {
    // await Todoapi.updateTodo(id)
  }

  return (
    <TodoContext.Provider value={{ todos, fetchTodos, addTodo, deleteTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
