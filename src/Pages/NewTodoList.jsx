import { useEffect, useState } from "react";
import Button from "../components/Button";
import LeftSide from "../components/LeftSide";
import Details from "../components/Details";
import PageTitle from "../components/PageTitle";

function NewTodoList() {
  const [todo, setTodo] = useState(() => {
    const storedTodo = localStorage.getItem("todo");
    return storedTodo ? JSON.parse(storedTodo) : []; // Default to an empty array
  });
  const [textTodo, setTextTodo] = useState("");

  function addTodo() {
    if (!textTodo) return;
    if (todo.length >= 10) return; // Prevent adding more than 10 tasks
    setTodo((prevTodo) => [
      ...prevTodo,
      {
        id: Date.now(),
        text: textTodo,
        completed: false,
        date: new Date().toLocaleString(),
      },
    ]);
    setTextTodo("");
  }

  function handleDeleteTask(id) {
    setTodo((prevTodo) => prevTodo.filter((item) => item.id !== id));
  }

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  function handleToggleItem(id) {
    setTodo((prevTodo) =>
      prevTodo.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  const totalCompleted = todo.filter((item) => item.completed).length;
  const totalTasks = todo.length;

  // Calculate percentage safely
  const completedPercentage =
    totalTasks > 0 ? Math.ceil((totalCompleted / totalTasks) * 100) : 0;

  return (
    <div className="w-full flex">
      <div className="basis-1/5">
        <Button>
          <LeftSide />
        </Button>
      </div>
      <div className="flex-1 bg-gray-100 h-screen">
        <Details />
        <PageTitle>Your daily To-do</PageTitle>
        <div className="max-w-3xl mx-auto text-center">
          {/* input */}
          <div className="p-2 w-[70%] relative">
            <input
              value={textTodo}
              onChange={(e) => setTextTodo(e.target.value)}
              placeholder="Type here..."
              className="bg-gray-600 py-2.5 rounded w-full text-white focus:outline-none focus:ring-0"
              type="text"
            />
            <button
              onClick={addTodo}
              disabled={todo.length >= 10} // Disable button if task limit is reached
              className="bg-blue-400 p-2.5 absolute right-0.5 w-[70px] border-none cursor-pointer"
            >
              Add
            </button>
          </div>

          {todo.map((task, i) => (
            <div
              key={task.id}
              className="bg-blue-300 mt-2 rounded py-1 flex justify-between items-center w-[70%]"
            >
              <div
                onClick={() => handleToggleItem(task.id)}
                className={`flex gap-4 items-center cursor-pointer px-1.5 ${
                  task.completed ? "line-through" : ""
                }`}
              >
                <p className="text-[17px]">{i < 9 ? `0${i + 1}` : i + 1}</p>
                <p className="text-[17px] font-medium">{task.text}</p>
                <span className="p-0.5 bg-blue-200 text-[15px]">
                  {task.date}
                </span>
              </div>

              <p
                onClick={() => handleDeleteTask(task.id)}
                className="inline text-red-500 px-1.5 text-right text-[18px] font-bold cursor-pointer"
              >
                Delete
              </p>
            </div>
          ))}

          <div className="text-center p-1.5 w-[70%]">
            {todo.length >= 10 && (
              <p className="text-center text-[16px] font-bold bg-red-400">
                You have reached your limit. Delete completed tasks to add more.
              </p>
            )}
            {todo.length > 0 && (
              <p className="text-center text-[18px] font-bold">
                You have {todo.length} tasks, and {totalCompleted} are completed
                ({completedPercentage}%).
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewTodoList;
