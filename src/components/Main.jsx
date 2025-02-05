import Button from "./Button";
import LeftSide from "./LeftSide";

function Main() {
  return (
    <div className="w-full flex">
      <div className="basis-1/5">
        <Button>
          <LeftSide />
        </Button>
      </div>
      <div className="flex-1 bg-gray-100 h-screen ">Right</div>
    </div>
  );
}

export default Main;
7;
