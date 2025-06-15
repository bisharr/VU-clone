import Button from "../components/Button";
import Details from "../components/Details";
import LeftSide from "../components/LeftSide";
import PageTitle from "../components/PageTitle";
// import TeacherDetail from "../components/TeacherDetail";
import TeacherList from "../components/TeacherList";

function Teachers({ teacher }) {
  console.log(teacher);
  return (
    <div className="w-full flex">
      <div className="md:basis-1/5">
        <Button>
          <LeftSide />
        </Button>
      </div>
      <div className="flex-1 bg-gray-100 h-screen overflow-scroll scrol">
        <Details />
        <PageTitle>Teachers</PageTitle>
        <TeacherList />
      </div>
    </div>
  );
}

export default Teachers;
