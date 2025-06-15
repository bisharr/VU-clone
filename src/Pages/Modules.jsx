import Button from "../components/Button";

import Details from "../components/Details";
import LeftSide from "../components/LeftSide";
import ModulesFront from "../components/ModulesFront";

function Modules() {
  return (
    <div className="w-full flex">
      <div className=" md:basis-1/5">
        <Button>
          <LeftSide />
        </Button>
      </div>
      <div className="flex-1  bg-gray-100 h-screen overflow-scroll scrol ">
        <Details />

        <ModulesFront />
      </div>
    </div>
  );
}

export default Modules;
