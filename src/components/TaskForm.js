import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

import { useNavigate, useParams } from "react-router-dom";
function TaskForm() {
  const { addTask, tasks, updateTask } = useContext(GlobalContext);
  const navigate = useNavigate();
  const params = useParams();
  const [task, setTask] = useState({
    id: "",
    title: "",
    description: "",
  });
  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.id) {
      updateTask(task);
    } else {
      addTask(task);
    }
    navigate("/");
  };
  useEffect(() => {
    const tasksFound = tasks.find((task) => task.id === params.id);

    if (tasksFound) {
      setTask(tasksFound);
    }
  }, [params.id, tasks]);
  return (
    <div className="flex justify-center items-center h-3/4">
      <form className="bg-gray-900 p-10" onSubmit={handleSubmit}>
        <h2 className="mb-7 text-3x1">
          {task.id ? "Editing a Task" : "Creating a Task"}
        </h2>
        <div className="mb-5">
          <input
            type="text"
            name="title"
            placeholder="write a title"
            className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full"
            onChange={handleChange}
            value={task.title}
          />
        </div>
        <div className="mb-5">
          <textarea
            name="description"
            rows="2"
            placeholder="Write a description"
            className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full"
            onChange={handleChange}
            value={task.description}
          ></textarea>
        </div>
        <button className="bg-green-600 w-full hover:bg-green-500 py-2 px-4 mt-5">
          {task.id ? "Edit" : "create"} Task
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
