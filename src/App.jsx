import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
function App() {
 const [todos, setTodos] = useState([])

  useEffect(()=>{
    axios.get('https://dummyjson.com/todos')
      .then(res=>{
          setTodos(res.data.todos)
          console.log(res.data.todos)
      })
      .catch(err => console.error(err))
  },[])
  return (
    <>
    {todos.map((mp)=>{
      return <Track key={mp.id} todo={mp}/>
    })}
    
    </>
  )
}


function Track({todo}){
  return (
    <div>
     <div>{todo.todo}</div>
    <button>{todo.completed ? 'Done' : 'not Done'}</button>
    <br />
    </div>
  )
}
export default App
