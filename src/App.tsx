import "./App.css";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
function App() {
  return (
    <div>
      <h1>Redux Toolkit TODO App</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
