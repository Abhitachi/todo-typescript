import { useContext } from 'react'
import { TodoContext } from './TodoContext'

export const useTodo = () => {
  // this hooks into the todoContext and retrieves the current value
  const context = useContext(TodoContext);

  if(!context){
    throw new Error("useTodo must be used within a TodoProvider")
  }
  return context
}
