import { useEffect, useState } from "react";
import Button from "../components/Button";
import LeftSide from "../components/LeftSide";
import Details from "../components/Details";
import PageTitle from "../components/PageTitle";

function NewTodoList({ fullname, regNo, openMenu, setOpenMenu }) {
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
      {/* Left Sidebar */}
      <div className=" md:basis-1/5">
        <Button>
          <LeftSide openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 px-4 py-6">
        <Details
          fullname={fullname}
          regNo={regNo}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
        />
        <PageTitle>Your daily To-do</PageTitle>

        <div className="max-w-3xl mx-auto w-full flex flex-col items-center">
          {/* Input Area */}
          <div className="w-full sm:w-[90%] md:w-[70%] relative mb-4">
            <input
              value={textTodo}
              onChange={(e) => setTextTodo(e.target.value)}
              placeholder="Type here..."
              className="bg-gray-600 text-white py-3 px-4 rounded w-full focus:outline-none"
              type="text"
            />
            <button
              onClick={addTodo}
              disabled={todo.length >= 10}
              className="absolute right-1 top-1 bottom-1 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded"
            >
              Add
            </button>
          </div>

          {/* Task List */}
          {todo.map((task, i) => (
            <div
              key={task.id}
              className="bg-blue-300 mt-2 rounded py-2 px-3 flex justify-between items-center w-full sm:w-[90%] md:w-[70%]"
            >
              <div
                onClick={() => handleToggleItem(task.id)}
                className={`flex flex-col sm:flex-row sm:gap-4 items-start sm:items-center cursor-pointer ${
                  task.completed ? "line-through text-gray-700" : ""
                }`}
              >
                <p className="text-[17px]">{i < 9 ? `0${i + 1}` : i + 1}</p>
                <p className="text-[17px] font-medium">{task.text}</p>
                <span className="p-1 bg-blue-200 text-sm mt-1 sm:mt-0">
                  {task.date}
                </span>
              </div>

              <p
                onClick={() => handleDeleteTask(task.id)}
                className="text-red-500 text-right text-[18px] font-bold cursor-pointer"
              >
                Delete
              </p>
            </div>
          ))}

          {/* Footer */}
          <div className="mt-4 w-full sm:w-[90%] md:w-[70%]">
            {todo.length >= 10 && (
              <p className="text-center text-[16px] font-bold bg-red-400 py-2 rounded">
                You have reached your limit. Delete completed tasks to add more.
              </p>
            )}
            {todo.length > 0 && (
              <p className="text-center text-[18px] font-bold mt-2">
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
