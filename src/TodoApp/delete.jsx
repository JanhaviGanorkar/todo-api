// import axios from 'axios'
// import {useState} from "react"


// export const useTodolist = () => {
//   const [todos, setTodos] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);


//   const getTodos =async () => {
//     setLoading(true);
//     try{
//       const response = await axios.get("https://api.freeapi.app/api/v1/todos")
//       // console.log(response.data.data)
//       setTodos(response.data.data)
//     }catch(err){
//       setError(err);
//       console.log("error in gettodos", err)
      
//     }finally{
//       setLoading(true)
//     }
//   }

//   const addTodo = (todo) => {
//     setTodos([...todos, todo]);
//   };

//   const deleteTodo = (id) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   return { getTodos,loading,todos,error};
// }
// import { useEffect } from 'react';
// import './App.css'
// import {useTodolist} from './hooks/useTodolist'
// export default function App() {
//   const {getTodos,loading,error,todos} = useTodolist();
//   // console.log(data)
//   useEffect(()=>{
//     getTodos();
//   },[])
  
//   return (
//     <main>
//       {loading?<h1>Loading...</h1>:(
//       <>
//         <ul>
//           {todos.map((todo)=>{
//             return(
//               <li key={todo.id}>
//                 {todo.title}
//               </li>

//             )
//           })}
//         </ul>
       
//       </>
//       )}
//     </main>
//   )
// }