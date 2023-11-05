import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../app/features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div>Todos</div>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => dispatch(removeTodo(todo.id))}>
            Remove TOdo
          </button>
        </li>
      ))}
    </>
  );
}

export default Todos;
