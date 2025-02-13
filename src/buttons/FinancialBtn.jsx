import { NavLink } from "react-router-dom";
import styles from "./buttons.module.css";

function FinancialBtn() {
  return (
    <div className={styles.nav}>
      <NavLink
        to="/financial"
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
              d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
            />
          </svg>

          <button>Financial Statements</button>
        </div>
      </NavLink>
    </div>
  );
}

export default FinancialBtn;
