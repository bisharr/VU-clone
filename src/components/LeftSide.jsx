import CourseWorksbtn from "../buttons/CourseWorksbtn";
import Examininationbtn from "../buttons/Examininationbtn";
import ExamResulbtn from "../buttons/ExamResulbtn";
import FinancialBtn from "../buttons/FinancialBtn";

import Homebtn from "../buttons/Homebtn";

import Modulesbtn from "../buttons/Modulesbtn";
import TeachersBtn from "../buttons/TeachersBtn";
import logo from "../assets/logo.png";
import Electionbtn from "../buttons/Electionbtn";
import Settingbtn from "../buttons/Settingbtn";
import LogOutbtn from "../buttons/LogOutbtn";
import TodoBtn from "../buttons/TodoBtn";
import VuAi from "../buttons/VuAi";

// import LecBtn from "../buttons/LecBtn";

// bg-gray-50 main bg

function LeftSide({ openMenu, setOpenMenu }) {
  return (
    <div
      className={`flex-col items-start pl-4 text-[18px]  md:flex  ${
        openMenu ? "flex" : "hidden"
      }   bg-gray-5  h-screen  overflow-y-scroll scrol`}
    >
      <div className="flex flex-col items-center">
        <svg
          onClick={() => setOpenMenu(false)}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-9 md:hidden mt-2.5 bg-gray-600 p-1 rounded text-white "
        >
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
        <img src={logo} className="w-[40%] md:w-[60%] my-10 mx-auto" />
      </div>
      <Homebtn />
      <Modulesbtn />
      {/* <LecBtn /> */}
      <CourseWorksbtn />
      <Examininationbtn />
      <ExamResulbtn />
      <FinancialBtn />
      <Electionbtn />
      <TeachersBtn />
      <TodoBtn />
      <VuAi />
      <div className=" my-10">
        <Settingbtn />
        <LogOutbtn />
      </div>
    </div>
  );
}

export default LeftSide;
