import Button from "../components/Button";
import LeftSide from "../components/LeftSide";
import Details from "../components/Details";
import PageTitle from "../components/PageTitle";

function Setting() {
  return (
    <div className="w-full flex">
      <div className="md:basis-1/5">
        <Button>
          <LeftSide />
        </Button>
      </div>
      <div className="flex-1 bg-gray-100 h-screen ">
        <Details />
        <PageTitle>Teachers</PageTitle>
        <h1>Settings</h1>
      </div>
    </div>
  );
}

export default Setting;
