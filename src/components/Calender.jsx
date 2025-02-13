import { useState, useEffect } from "react";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();
  const startingIndex = (firstDayOfMonth + 6) % 7; // Adjust to start from Monday

  return (
    <div className="p-5 bg-white rounded-lg shadow-lg py-3 ">
      <div className="flex justify-between items-center">
        <p className="text-2xl font-bold text-blue-600 mt-2">
          {currentDate.toDateString()}
        </p>
        <div className="flex items-center gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4 cursor-pointer"
          >
            <path
              fillRule="evenodd"
              d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
              clipRule="evenodd"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4 cursor-pointer"
          >
            <path
              fillRule="evenodd"
              d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-7 gap-2">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="text-sm font-medium text-gray-600">
            {day}
          </div>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-7 gap-2">
        {Array.from({ length: startingIndex }).map((_, index) => (
          <div key={`empty-${index}`} className="text-sm font-medium"></div>
        ))}
        {[...Array(daysInMonth)].map((_, index) => {
          const isToday = index + 1 === currentDate.getDate();
          return (
            <div
              key={index}
              className={`text-sm font-medium p-2 rounded ${
                isToday ? "bg-blue-500 text-white font-bold" : "text-gray-800"
              }`}
            >
              {index + 1}
            </div>
          );
        })}
      </div>
      {/* Upcoming lectures */}
      <div className="mt-10 p-3">
        <p className="text-blue-600 text-[18px]">Upcoimg Lectures</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-35 mt-10 mb-5 text-gray-500  mx-auto "
        >
          <path
            fillRule="evenodd"
            d="m6.72 5.66 11.62 11.62A8.25 8.25 0 0 0 6.72 5.66Zm10.56 12.68L5.66 6.72a8.25 8.25 0 0 0 11.62 11.62ZM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788Z"
            clipRule="evenodd"
          />
        </svg>
        <p className="text-gray-400">You have no Upcoming Lectures</p>
      </div>
    </div>
  );
};

export default Calendar;
