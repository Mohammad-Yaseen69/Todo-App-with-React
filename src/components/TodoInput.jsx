import { useRef, useState } from "react";
import { useTodo } from "../context/TodoContext";


function TodoForm() {
    const [todo , setTodo] = useState("")
    const {AddTodo} = useTodo()
    const inputRef = useRef()
    return (
        <form className="flex">
            <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Write Todo..."
                ref={inputRef}
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button onClick={(e) => {
                e.preventDefault()
                AddTodo(todo)
                setTodo('')
            }} type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm