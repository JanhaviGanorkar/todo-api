import React from 'react';
import CreateTodo from './components/Createtodo/Createtodo'; // Import the CreateTodo component
import RenderTodo from './components/Rendertodo/Rendertodo'; // Import the RenderTodo component

export default function TodoApp() {
  return (
    <div className="container mx-auto p-5 bg-slate-500">
      <h1 className="text-3xl font-bold text-center mb-5">Todo Application</h1>
      {/* CreateTodo for adding new todos */}
      <CreateTodo />
      {/* RenderTodo for displaying the list of todos */}
      <RenderTodo />
    </div>
  );
}
