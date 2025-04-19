import Button from "../components/Button";
import Details from "../components/Details";
import ExamPage from "../components/ExamPage";
import LeftSide from "../components/LeftSide";
import PageTitle from "../components/PageTitle";

function Examination({ openMenu, setOpenMenu, fullname, regNo }) {
  return (
    <div className="w-full flex">
      <div className="md:basis-1/5">
        <Button>
          <LeftSide openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </Button>
      </div>
      <div className="flex-1 bg-gray-100 h-screen scrol overflow-scroll p-1.5 ">
        <Details
          fullname={fullname}
          regNo={regNo}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
        />
        <PageTitle>Exams</PageTitle>
        <h1 className="text-gray-700 font-bold ml-5">Available Exams</h1>
        <ExamPage />
      </div>
    </div>
  );
}

export default Examination;
