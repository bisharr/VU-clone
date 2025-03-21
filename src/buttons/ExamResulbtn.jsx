import { NavLink } from "react-router-dom";
import styles from "./buttons.module.css";

function ExamResulbtn() {
  return (
    <div className={styles.nav}>
      <NavLink
        to="/examresults"
        className="inline text-[18px] font-semibold text-gray-900  hover:text-blue-400 items-center cursor-pointer py-1 gap-2 rounded-sm w-full hover:bg-gray-50 delay-200 
transition-all duration-200 hover:text-[17px]"
      >
        <div className="flex p-2 w-full gap-3 justify-center items-center cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>

          <button>Exam Results</button>
        </div>
      </NavLink>
    </div>
  );
}

export default ExamResulbtn;
