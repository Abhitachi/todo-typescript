import { useEffect, useRef, useState } from "react";
import { toast } from 'react-hot-toast'
import { useTodo } from "../context/useTodo";
import { Input } from "./Input";



export const AddTodo = () => {
  const [input, setInput] = useState<string>('');
  const {addTodo} = useTodo();
  const inputRef = useRef<HTMLInputElement>(null) //referenced element is of type input

  // in react forwardRef is function that allow you to pass a ref from a parent component to a child component.
  // Ref are used to access and manipulate the underlying DOM elements directly 

  useEffect(() => {
    if(inputRef.current){
      inputRef.current.focus();
    }
  },[])

  const handleSubmission = (e:React.FormEvent) => { //event object e is of type synthetic event
    e.preventDefault();
   if(input.trim() !== ''){
      addTodo(input)
      setInput('')
      toast.success("Todo added successfully!")
   }else{
      toast.error('Todo field cannot be empty!')
   }
  }

  return (
    <form onSubmit={handleSubmission}>
      <div className = "flex items-center w-full max-w-lg gap-2 p-5 m-auto">
        <Input 
        value={input} 
        ref={inputRef}
        onChange = {(e)  => {setInput(e.target.value)}}
        className = "w-full px-5 py-2 bg-transparent border-2 outline-none border-zinc-600 rounded-xl placeholder:text-zinc-500 focus:border-white"
        placeholder="start typing ..." />
        <button type="submit" className="px-5 py-2 text-sm font-normal text-blue-300 bg-blue-900 border-2 border-blue-900 rounded-xl">Submit</button>
      </div>
    </form>
  )
}
