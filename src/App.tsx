import { Toaster } from 'react-hot-toast'
import { AddTodo, TodoList } from './components'


function App() {
  return (
    <div >
     <Toaster position = "top-right" />
     <AddTodo/>
     <TodoList/>
    </div>
  )
}

export default App
