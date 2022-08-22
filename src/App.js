import "./App.css";
import Heading from "./components/Heading";
import { Route, Routes } from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { ContextProvider } from "./context/GlobalContext";
function App() {
  return (
    <div className="App">
      <div className="h-screen text-white text-center p-10 bg-slate-800">
        <div className="container mx-auto h-full">
          <ContextProvider>
            <Heading />
            <Routes>
              <Route path="/" element={<TaskList />} />
              <Route path="/add" element={<TaskForm />} />
              <Route path="/edit/:id" element={<TaskForm />} />
            </Routes>
          </ContextProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
