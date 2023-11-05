import "./App.css";
import AddTodo from "./components/addTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <h1>Todo with Redux</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
