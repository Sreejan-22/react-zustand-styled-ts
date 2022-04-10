import { useState } from "react";
import { useTodoStore } from "./todoStore";
import "./App.css";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const { addTodo, removeTodo, toggleCompletedState, todos } = useTodoStore();

  return (
    <div>
      <h1>Todo App</h1>
      <br />
      <br />
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      &nbsp;&nbsp;&nbsp;
      <button
        onClick={() => {
          if (todoInput.length > 0) {
            addTodo(todoInput);
          }
        }}
      >
        Add Todo
      </button>
      <br />
      <br />
      <div className="todos">
        {todos.map((todo) => (
          <div className="todo" key={todo.id}>
            <input
              type="checkbox"
              name=""
              id=""
              checked={todo.completed}
              onChange={() => toggleCompletedState(todo.id)}
              className={todo.completed ? "strikethrough" : ""}
            />
            <label htmlFor="" className={todo.completed ? "strikethrough" : ""}>
              {todo.description}
            </label>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => removeTodo(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
