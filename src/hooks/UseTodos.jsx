import { useState, useEffect } from "react"
import axios from "axios"
function useTodos(n){
    const [todos, setTodos]= useState([])
    const [loading, setLoading]= useState(true)
    
    useEffect(()=>{
      const value = setInterval(() => {
      axios.get('https://dummyjson.com/todos')
        .then(res=>{
          setLoading(false) 
          setTodos(res.data.todos)
        })
        .catch(err => console.error(err))
      }, n*1000)
      axios.get('https://dummyjson.com/todos')
        .then(res=>{
          setLoading(false) 
          setTodos(res.data.todos)
        })
        .catch(err => console.error(err))
      return ()=>{
        clearInterval(value)
      }
    },[n])
  
  
    return {todos,loading};
  }

export default useTodos