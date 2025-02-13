import CourseWorksbtn from "../buttons/CourseWorksbtn";
import Examininationbtn from "../buttons/Examininationbtn";
import ExamResulbtn from "../buttons/ExamResulbtn";
import FinancialBtn from "../buttons/FinancialBtn";

import Homebtn from "../buttons/Homebtn";
import Lecturebtn from "../buttons/Lecturebtn";
import Modulesbtn from "../buttons/Modulesbtn";
import TeachersBtn from "../buttons/TeachersBtn";
import logo from "../assets/logo.png";
import Electionbtn from "../buttons/Electionbtn";
import Settingbtn from "../buttons/Settingbtn";
import LogOutbtn from "../buttons/LogOutbtn";

// bg-gray-50 main bg

function LeftSide() {
  return (
    <div className="w-full flex flex-col   bg-gray-5  h-screen  overflow-y-scroll scrol">
      <img src={logo} className="w-[60%] my-10 mx-auto" />
      <Homebtn />

      <Modulesbtn />
      <Lecturebtn />
      <CourseWorksbtn />
      <Examininationbtn />
      <ExamResulbtn />
      <FinancialBtn />
      <Electionbtn />
      <TeachersBtn />
      <div className=" mt-10">
        <Settingbtn />
        <LogOutbtn />
      </div>
    </div>
  );
}

export default LeftSide;
