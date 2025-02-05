import { Link } from "react-router-dom";

function ExamResulbtn() {
  return (
    <Link
      className="flex  px-7  text-[18px] font-semibold text-gray-900  hover:text-blue-400 items-center cursor-pointer py-1 gap-2 rounded-sm w-full hover:bg-gray-50 delay-200 
transition-all duration-200 hover:text-[17px]"
      to="/examresults"
    >
      <p>Icons</p>
      <button>Exam Result</button>
    </Link>
  );
}

export default ExamResulbtn;
