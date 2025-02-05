import LeftSide from "../components/LeftSide";
import Button from "../components/Button";

function Lectures() {
  return (
    <div className="w-full flex">
      <div className="basis-1/5">
        <Button>
          <LeftSide />
        </Button>
      </div>
      <div className="flex-1 bg-gray-100 h-screen ">Lectures</div>
    </div>
  );
}

export default Lectures;
