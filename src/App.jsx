import { useEffect, useState, memo } from 'react'
import './App.css'
import axios from 'axios'

function useTodos(n){
  const [todos, setTodos]= useState([])
  const [loading, setLoading]= useState(true)
  
  useEffect(()=>{
    setInterval(() => {
    axios.get('https://dummyjson.com/todos')
      .then(res=>{
        setLoading(false) 
        setTodos(res.data.todos)
      })
      .catch(err => console.error(err))
    }, n*1000)
  },[n])


  return {todos,loading};
}
function App() {
 const {todos, loading} = useTodos(3)
  return (
    <>

    {loading ? "Loading...........":todos.map((mp)=>{
      return <Track key={mp.id} todo={mp}/>
    })}
    
    </>
  )
}


const Track = memo(({ todo }) => {
  return (
    <div>
      <div>{todo.todo}</div>
      <button>{todo.completed ? 'Done' : 'Not Done'}</button>
      <br />
    </div>
  );
});
export default App
