import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TodoProvider} from './contexts/ToDoContext.jsx'
import TodoApp from './TodoApp/TodoApp.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoProvider>
      <TodoApp />
    </TodoProvider>
  </React.StrictMode>,
)
