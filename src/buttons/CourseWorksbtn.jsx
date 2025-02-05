import { Link } from "react-router-dom";

function CourseWorksbtn() {
  return (
    <Link
      className="flex  px-7  text-[18px] font-semibold text-gray-900  hover:text-blue-400 items-center cursor-pointer py-1 gap-2 rounded-sm w-full hover:bg-gray-50 delay-200 
transition-all duration-200 hover:text-[17px]"
      to="/coursework"
    >
      <p>Icons</p>
      <button>course work</button>
    </Link>
  );
}

export default CourseWorksbtn;
