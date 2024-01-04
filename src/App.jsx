import { useState } from "react"
import { TodoContext, TodoProvider } from "./context/TodoContext"


function App() {

  const [todos, setTodos] = useState([])

  function AddTodo(todo) {
    setTodos(prev => {
      [{
        id: Date.now(),
        todo: todo,
        Completed: false
      }, ...prev]
    })
  }

  function Edit(todo, id) {
    setTodos(prev => {
      prev.map(allValues => allValues.id === id ? allValues.todo = todo : allValues)
    })
  }

  function Delete(id) {
    setTodos(prev => {
      prev.filter(allValues => allValues.id !== id)
    })
  }

  function CompleteToggle(id) {
    setTodos(prev => {
      prev.map(allValues => allValues.id === id ? { ...allValues, Completer: !allValues.Completed } : allValues)
    })
  }

  return (
    <TodoProvider value={{ AddTodo, CompleteToggle, Delete, Edit, todos }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
