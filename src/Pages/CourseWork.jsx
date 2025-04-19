import Button from "../components/Button";
import LeftSide from "../components/LeftSide";
import Details from "../components/Details";
import PageTitle from "../components/PageTitle";
import CourseWrokpage from "../components/CourseWrokpage";

import { useEffect } from "react";
import { askGemini } from "../serviceAPi/GeminiAPi";

function CourseWork({ openMenu, setOpenMenu, fullname, regNo }) {
  console.log("Hello from gemini ");
  useEffect(() => {
    const fetchData = async () => {
      const response = await askGemini("What is Tailwind CSS?");
      console.log(response);
    };

    fetchData();
  }, []);

  return (
    <div className="w-full flex">
      <div className=" md:basis-1/5">
        <Button>
          <LeftSide openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </Button>
      </div>
      <div className="flex-1 bg-gray-100 h-screen overflow-scroll scrol p-1.5 ">
        <Details
          fullname={fullname}
          regNo={regNo}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
        />
        <PageTitle>Course Work</PageTitle>
        <h1 className="text-gray-700 font-bold ml-5">Available Course Work</h1>
        <CourseWrokpage />
      </div>
    </div>
  );
}

export default CourseWork;
