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

function LeftSide() {
  return (
    <div className="w-full flex flex-col items-start pl-4 text-[18px]   bg-gray-5  h-screen  overflow-y-scroll scrol">
      <img src={logo} className="w-[60%] my-10 mx-auto" />
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
