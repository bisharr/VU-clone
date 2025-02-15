import { NavLink } from "react-router-dom";
import styles from "./buttons.module.css";

function LecBtn() {
  return (
    <div className={styles.nav}>
      <NavLink
        to="/lec"
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
              d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
            />
          </svg>

          <button>Lecture</button>
        </div>
      </NavLink>
    </div>
  );
}

export default LecBtn;
