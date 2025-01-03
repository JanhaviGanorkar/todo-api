import React, { createContext, useState, useCallback } from "react";
import axiosInstance from "../utils/utils";
import Todoapi from "../api/todoapi";

export const TodoContext = createContext();
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const fetchTodos = useCallback(async () => {
    try {
      const res = await axiosInstance.get("/todos");
      setTodos(res.data.data, "Fetching");
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  }, []);

  const addTodo = async (todo) => {
    await Todoapi.addTodo(todo);
    setTodos([...todos, todo]);
  };

  const deleteTodo = async (id) => {
    await Todoapi.deleteTodo(id);
    setTodos(todos.filter((todo) => todo._id !== id));
  };
  const updateTodo = async (selectedId, newTodo) => {
    await Todoapi.updateTodos(selectedId, newTodo);
    setTodos([...todos, newTodo]);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        fetchTodos,
        addTodo,
        deleteTodo,
        selectedId,
        setSelectedId,
        updateTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
