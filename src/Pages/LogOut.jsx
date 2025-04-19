import Button from "../components/Button";
import LeftSide from "../components/LeftSide";
import Details from "../components/Details";
import PageTitle from "../components/PageTitle";
import { Link } from "react-router-dom";

function LogOut() {
  return (
    <div className="w-full flex">
      <div className="md:basis-1/5">
        <Button>
          <LeftSide />
        </Button>
      </div>
      <div className="flex-1 bg-gray-100 h-screen ">
        <Details />
        <PageTitle>Log out</PageTitle>
        <Link
          to="/"
          className=" mr-1.5 text-center text-white border-0 bg-blue-300 w-[60%] px-4 rounded py-2 cursor-pointer"
        >
          <button className="">Log out</button>
        </Link>
      </div>
    </div>
  );
}

export default LogOut;
