import LeftSide from "../components/LeftSide";
import Button from "../components/Button";
import Details from "../components/Details";

function Lectures() {
  return (
    <div className="w-full flex">
      <div className="md:basis-1/5">
        <Button>
          <LeftSide />
        </Button>
      </div>
      <div className="flex-1 bg-gray-100 h-screen ">
        <Details />
        <Lectures>Lectures</Lectures>
        <h1>Lectures</h1>
      </div>
    </div>
  );
}

export default Lectures;
