import { NavLink } from "react-router-dom";
import styles from "./buttons.module.css";

function Lecturebtn() {
  return (
    <div className={styles.nav}>
      <NavLink
        to="/lectures"
        className="inline text-[18px] font-semibold text-gray-900  hover:text-blue-400 items-center cursor-pointer py-1 gap-2 rounded-sm w-full hover:bg-gray-50 delay-200 
transition-all duration-200 hover:text-[17px]"
      >
        <div className="flex p-2 w-full gap-3 justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z"
            />
          </svg>

          <button>Lectures</button>
        </div>
      </NavLink>
    </div>
  );
}

export default Lecturebtn;
