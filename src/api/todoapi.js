import axios from "axios";
import axiosInstance from "../utils/utils";

export const deleteTodo = async (id) => {
  try {
    const { data } = await axiosInstance.delete(`/todos/${id}`);
    return data.message;
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
};

export const addTodo = async (newTodo) => {
  try {
    const { data } = await axiosInstance.post("/todos", newTodo);
    return data.data;
  } catch (error) {
    console.error("Error adding todo:", error);
    throw error;
  }
};

export const getTodos = async () => {
  try {
    const { data } = await axiosInstance.get("/todos");
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
};
export const updateTodos = async (selectedId, newTodo) => {
  try {
    const { data } = await axiosInstance.patch(`/todos/${selectedId}`, newTodo);

    return data.data;
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
};

const todoapi = {
  getTodos,
  addTodo,
  deleteTodo,
  updateTodos,
};

export default todoapi;
