import "./App.css";
import AddTodo from "./components/addTodo";
import Todos from "./components/Todos";
function App() {
  return (
    <>
      <div className="flex  flex-col items-center justify-center">
        <div className="">
          <h1 className="text-center font-bold text-4xl text-gray-900">
            Learn about redux toolkit
          </h1>
          <AddTodo />
          <Todos />
        </div>
      </div>
    </>
  );
}

export default App;
