import { useState } from "react";
import { useTodoStore } from "./todoStore";
import styled from "styled-components";
import "./App.css";

const Container = styled.div`
  margin-top: 4rem;
  width: 100vw;
`;

const TodoInputContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const TodoInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
`;

const AddTodoButton = styled.button`
  padding: 0 0.5rem;
  cursor: pointer;
`;

const TodosContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Todos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Todo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const TodoLabel = styled.label<{ completed: boolean }>`
  font-size: 1.2rem;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

const DeleteTodoBtn = styled.button`
  padding: 0 0.5rem;
`;

function App() {
  const [todoInput, setTodoInput] = useState("");
  const { addTodo, removeTodo, toggleCompletedState, todos } = useTodoStore();

  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>Todo App</h1>
      <br />
      <br />
      <TodoInputContainer>
        <TodoInput
          type="text"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        &nbsp;&nbsp;&nbsp;
        <AddTodoButton
          onClick={() => {
            if (todoInput.length > 0) {
              addTodo(todoInput);
            }
          }}
        >
          Add Todo
        </AddTodoButton>
      </TodoInputContainer>
      <br />
      <br />
      <TodosContainer>
        <Todos>
          <Todos>
            {todos.map((todo) => (
              <Todo key={todo.id}>
                <input
                  type="checkbox"
                  name=""
                  id={todo.id}
                  checked={todo.completed}
                  onChange={() => toggleCompletedState(todo.id)}
                />
                &nbsp;
                <TodoLabel htmlFor={todo.id} completed={todo.completed}>
                  {todo.description}
                </TodoLabel>
                &nbsp;&nbsp;&nbsp;
                <DeleteTodoBtn onClick={() => removeTodo(todo.id)}>
                  Delete
                </DeleteTodoBtn>
              </Todo>
            ))}
          </Todos>
        </Todos>
      </TodosContainer>
    </Container>
  );
}

export default App;
