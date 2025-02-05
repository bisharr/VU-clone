import { Link } from "react-router-dom";
import CourseWorksbtn from "../buttons/CourseWorksbtn";
import Examininationbtn from "../buttons/Examininationbtn";
import ExamResulbtn from "../buttons/ExamResulbtn";
import FinancialBtn from "../buttons/FinancialBtn";

import Homebtn from "../buttons/Homebtn";
import Lecturebtn from "../buttons/Lecturebtn";
import Modulesbtn from "../buttons/Modulesbtn";
import TeachersBtn from "../buttons/TeachersBtn";

function LeftSide() {
  return (
    <div className="w-full flex flex-col items-center bg-gray-50 gap-1 h-screen">
      <Link to="/">
        <Homebtn />
      </Link>
      <Link to="/modules">
        <Modulesbtn />
      </Link>

      <Link to="/lectures">
        <Lecturebtn />
      </Link>
      <Link to="/coursework">
        <CourseWorksbtn />
      </Link>
      <Link to="/exams">
        <Examininationbtn />
      </Link>
      <Link to="/examresults">
        <ExamResulbtn />
      </Link>
      <Link to="/financial">
        <FinancialBtn />
      </Link>
      <Link to="/teachers">
        <TeachersBtn />
      </Link>
    </div>
  );
}

export default LeftSide;
