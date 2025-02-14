import PageTitle from "../components/PageTitle";
import { motion } from "framer-motion";
import ClassAttendanceChart from "../components/ClassAttendanceChart";
import election from "../assets/election.png";
import { useEffect, useState } from "react";

function HomeSlides() {
  const messages = [
    {
      title: "Mock Examination",
      details:
        "Dear All students, Please be informed that we shall be running mock examinations for you all to practice",
    },
    {
      title: "Online Learning",
      details:
        " Oh!! Dear All students, Please be informed that we shall be running mock examinations for you all to practice",
    },
    {
      title: "Reference Resources",
      details:
        "You can now view content, be it documents in PDF, Ms Word etc including by week.",
    },
    {
      title: "Good Evening",
      details:
        "Good day dear student, find all your Lesson resources in one place, recorded Lectures, reference notes etc, ",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % messages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [messages, pause]); // ✅ Changed `messages.length` to `messages`

  return (
    <div className="basis-[70%]">
      <div className=" text-white bg-blue-500 w-full flex rounded-[8px] ">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 500 }}
          transition={{ duration: 0.9 }}
          className="p-2 mt-1.5"
        >
          <h3 className=" font-bold text-[22px] mb-2.5">
            {messages[currentSlide].title}
          </h3>
          <p className=" text-[17px] w-[50%]">
            {messages[currentSlide].details}
          </p>
          {/* Icons */}
          <div className="divsvg flex items-center justify-center gap-1">
            {messages.map((_, index) => (
              <svg
                onClick={() => {
                  setCurrentSlide(index);
                  setPause(true);
                }}
                onMouseEnter={() => {
                  setCurrentSlide(index);
                  setPause(true);
                }}
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-12 cursor-pointer text-gray-300 hover:text-white transition delay-200 ${
                  index === currentSlide ? " text-white" : ""
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14"
                />
              </svg>
            ))}
          </div>
        </motion.div>
      </div>
      {/* my modules */}
      <div className="bg-white p-6 text-white rounded mt-4  items-center">
        <PageTitle>My Modules</PageTitle>
        <div className=" flex gap-x-4 mx-auto  items-center justify-center">
          <div className="bg-red-500 rounded flex flex-col items-start p-3 gap-y-1 cursor-pointer ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5"
            >
              <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
              <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
            </svg>
            <h3 className="text-[16px] font-semibold w-[70%]">
              Internet technology and web design
            </h3>
            <p className=" text-gray-200">(1302 ST)</p>
          </div>
          <div className="bg-red-500 rounded flex flex-col items-start p-3 gap-y-1 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5"
            >
              <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
              <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
            </svg>
            <h3 className="text-[16px] font-semibold w-[70%]">
              Financial Foundation for success
            </h3>
            <p className=" text-gray-200">(CRE 302)</p>
          </div>
          <div className="bg-red-500 rounded flex flex-col items-start p-3 gap-y-1 cursor-pointer ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5"
            >
              <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
              <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
            </svg>
            <h3 className="text-[16px] font-semibold w-[70%]">
              Code with Python and Django
            </h3>
            <p className=" text-gray-200">(1326 ST)</p>
          </div>
        </div>
      </div>
      {/* Attendence */}
      <div className="mt-4 flex items-center gap-2">
        <ClassAttendanceChart />
        <img
          className=" h-100 w-[35%] object-cover rounded-xl"
          src={election}
        />
      </div>
    </div>
  );
}

export default HomeSlides;
