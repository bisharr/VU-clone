import Button from "../components/Button";
import LeftSide from "../components/LeftSide";

function CourseWork() {
  return (
    <div className="w-full flex">
      <div className="basis-1/5">
        <Button>
          <LeftSide />
        </Button>
      </div>
      <div className="flex-1 bg-gray-100 h-screen ">Course work</div>
    </div>
  );
}

export default CourseWork;
