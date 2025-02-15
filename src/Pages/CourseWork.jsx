import Button from "../components/Button";
import LeftSide from "../components/LeftSide";
import Details from "../components/Details";
import PageTitle from "../components/PageTitle";
import CourseWrokpage from "../components/CourseWrokpage";

function CourseWork() {
  return (
    <div className="w-full flex">
      <div className="basis-1/5">
        <Button>
          <LeftSide />
        </Button>
      </div>
      <div className="flex-1 bg-gray-100 h-screen overflow-scroll scrol ">
        <Details />
        <PageTitle>Course Work</PageTitle>
        <h1 className="text-gray-700 font-bold ml-5">Available Course Work</h1>
        <CourseWrokpage />
      </div>
    </div>
  );
}

export default CourseWork;
