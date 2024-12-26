import { useEffect, useState } from 'react'
import  {getTodos} from './api/todoapi'
import {Button} from './components/ui/button'
import Navbar from './components/Navbar/Navbar'
import Createtodo from './components/Createtodo/Createtodo'
import Rendertodo from './components/Rendertodo/Rendertodo'
function App() {

  const [todolist, setTodolist] = useState([])
  
  useEffect(() => {
   
    fetchTodos()
  }, [])

  const fetchTodos = async () => {
    const todos = await getTodos()  
    console.log(todos)
 setTodolist(todos) }
  
  
  

  return (
    <>
    <div>
      <Navbar />
     <div className="bg-[#172842] min-h-screen py-8">
     <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">

      <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
      <Createtodo />
      <Rendertodo />
      
    {/* <Button className='bg-white text-black'>delete todo</Button> */}
   </div>
   <div>
     </div>
   </div>
      </div>
   
       </>
  )
}

export default App