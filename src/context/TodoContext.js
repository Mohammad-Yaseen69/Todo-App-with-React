import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: 'BreakFast',
            Completed: false,
        }
    ],
    Edit: (todo, id) => { },
    Delete: (id) => { },
    AddTodo: (todo) => { },
    CompleteToggle: (id) => { }
})

export const TodoProvider = TodoContext.Provider

export function useTodo() {
    return useContext(TodoContext);
}