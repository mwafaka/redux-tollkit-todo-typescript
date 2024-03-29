// src/features/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

export interface Todos {
    todos: [];
    id: number;
    text: string;
    completed: boolean;
  }

export const todoSlice = createSlice({
  name: 'todos',
  initialState: [] as Todos[],
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, completed: false,todos:[] });
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    editTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, editTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
