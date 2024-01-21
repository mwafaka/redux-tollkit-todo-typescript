// src/components/TodoList.tsx
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, editTodo, deleteTodo, Todos } from "../features/todoSlice";

const TodoList = () => {
  const todos = useSelector((state: Todos) => state.todos);

  const dispatch = useDispatch();
  const [editingTodoId, setEditingTodoId] = useState<number | null>(null);
  const [editedTodoText, setEditedTodoText] = useState("");

  const handleEditTodo = (todoId: number, todoText: string) => {
    setEditingTodoId(todoId);
    setEditedTodoText(todoText);
  };

  const handleSaveEdit = (todoId: number) => {
    dispatch(editTodo({ id: todoId, text: editedTodoText }));
    setEditingTodoId(null);
  };

  return (
    <ol>
      {todos.length > 0
        ? todos.map((todo: Todos) => (
            <p key={todo.id}>
              {editingTodoId === todo.id ? (
                <>
                  <input
                    type="text"
                    value={editedTodoText}
                    onChange={(e) => setEditedTodoText(e.target.value)}
                  />
                  <button onClick={() => handleSaveEdit(todo.id)}>Save</button>
                </>
              ) : (
                <>
                  <span
                    style={{
                      textDecoration: todo.completed ? "line-through" : "none",
                    }}
                    onClick={() => dispatch(toggleTodo(todo.id))}
                  >
                    {todo.text}
                  </span>
                  <button onClick={() => handleEditTodo(todo.id, todo.text)}>
                    Edit
                  </button>
                  <button onClick={() => dispatch(deleteTodo(todo.id))}>
                    Delete
                  </button>
                </>
              )}
            </p>
          ))
        : "no todo list"}
    </ol>
  );
};

export default TodoList;
