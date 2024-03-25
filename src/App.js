import AddTodo from "./app/components/AddTodo";
import Todos from "./app/components/Todos";
import "./index.css";

function App() {
  return (
    <div className="App ">
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
