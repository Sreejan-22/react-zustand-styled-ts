import create from "zustand";
import { v4 as uuid } from "uuid";

import { Todo } from "./model/Todo";

interface TodoState {
  todos: Todo[];
  addTodo: (description: string) => void;
  removeTodo: (id: string) => void;
  toggleCompletedState: (id: string) => void;
}

export const useTodoStore = create<TodoState>((set) => {
  return {
    // initial state
    todos: [],
    // methods for manipulating state
    addTodo: (description: string) => {
      set((state) => {
        return {
          todos: [
            ...state.todos,
            {
              id: uuid(),
              description,
              completed: false,
            } as Todo,
          ],
        };
      });
    },
    removeTodo: (id: string) => {
      set((state) => {
        return {
          todos: state.todos.filter((todo) => todo.id !== id),
        };
      });
    },
    toggleCompletedState: (id) => {
      set((state) => {
        return {
          todos: state.todos.map((todo) =>
            todo.id === id
              ? ({ ...todo, completed: !todo.completed } as Todo)
              : todo
          ),
        };
      });
    },
  };
});
