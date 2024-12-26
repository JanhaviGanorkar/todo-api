import axios from "axios";
import axiosInstance from "../utils/utils";
// import { todo } from "node:test";

export const deleteTodo = async (id) => {
  try {
    const { data } = await axiosInstance.delete(`/todos/${id}`);
    return data.message;
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
};
// http://localhost:8080/api/v1/todos
export const addTodo = async (newTodo) => {
  try {
    console.log("we are hear");
    const { data } = await axiosInstance.post("/todos", newTodo);
    return data.data; // Response data ko return karenge (new todo ka data)
  } catch (error) {
    console.error("Error adding todo:", error);
    throw error;
  }
};

export const getTodos = async () => {
  try {
    const { data } = await axiosInstance.get("/todos");
    // console.log(res)
    return data.data;
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
};
export const updateTodos = async () => {
  try {
    const { data } = await axiosInstance.get(`/todos/${id}`, todo);
    console.log(data.data);
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
