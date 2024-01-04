import { createContext, useContext } from "react";

export const TodoContext = createContext([
    {
        id: 1,
        todo: 'BreakFast',
        completed: false,
        Editable: false,
        Edit: (todo, id) => { },
        Delete: (id) => { }
    }
])

export const TodoProvider = TodoContext.Provider

export function useTodo() {
    return useContext(TodoContext);
}