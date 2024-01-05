import { useEffect, useState } from "react"
import { TodoContext, TodoProvider } from "./context/TodoContext"
import TodoForm from "./components/TodoForm"
import TodoItem from "./components/TodoItem"


function App() {

  const [todos, setTodos] = useState([])

  function AddTodo(todo) {

    setTodos(prev => [{ ...todo }, ...prev])

    // console.log(todos);
  }

  function Edit(todo, id) {
    setTodos(prev => prev.map(allValues => allValues.id === id ? { ...allValues, todo: todo } : allValues))
  }

  function Delete(id) {
    setTodos(prev => prev.filter(allValues => allValues.id !== id))
  }

  function CompleteToggle(id) {
    setTodos(prev => prev.map(allValues => allValues.id === id ? { ...allValues, Completed: !allValues.Completed } : allValues))
  }


  useEffect(() => {
    const getting_todos = JSON.parse(localStorage.getItem("todos"))
    if (getting_todos && getting_todos.length > 0) {
      setTodos(getting_todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  // console.log();
  return (
    <TodoProvider value={{ AddTodo, CompleteToggle, Delete, Edit, todos }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map(eachtodo => (
              <div className="w-full" key={eachtodo.id}>
                <TodoItem todo={eachtodo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
