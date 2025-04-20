import Button from "../components/Button";
import Details from "../components/Details";
import LeftSide from "../components/LeftSide";
import PageTitle from "../components/PageTitle";
// import TeacherDetail from "../components/TeacherDetail";
import TeacherList from "../components/TeacherList";

function Teachers({ teacher, openMenu, setOpenMenu, fullname, regNo }) {
  console.log(teacher);
  return (
    <div className="w-full flex">
      <div className="md:basis-1/5">
        <Button>
          <LeftSide openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </Button>
      </div>
      <div className="flex-1 bg-gray-100 h-screen overflow-scroll scrol">
        <Details
          fullname={fullname}
          regNo={regNo}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
        />
        <PageTitle>Teachers</PageTitle>
        <TeacherList teacher={teacher} />
      </div>
    </div>
  );
}

export default Teachers;
