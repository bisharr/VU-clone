import Button from "../components/Button";
import LeftSide from "../components/LeftSide";

import electionCover from "../assets/electioncover.png";
import electionSide from "../assets/electionside.png";
import Details from "../components/Details";
function Elections({ fullname, regNo, openMenu, setOpenMenu }) {
  return (
    <div className="w-full flex">
      <div className="md:basis-1/5">
        <Button>
          <LeftSide />
        </Button>
      </div>
      <div className="flex-1 bg-gray-100 h-screen overflow-scroll scrol ">
        <Details
          fullname={fullname}
          regNo={regNo}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
        />
        <div className=" mx-auto-3">
          <img src={electionCover} alt="cover" />
          <div className="flex  justify-around mt-12 p-3 w-[80%] mx-auto">
            <div>
              <h1 className=" text-indigo-700 text-2xl font-bold">
                Welcome to the VU Elections
              </h1>
              <p className="text-gray-700 space-x-1.5 mt-3">
                -Polling made easy with VClass, Cast your vote electronically
                and smoothly
              </p>
              <p className="text-gray-700">
                -Simply Tap Vote on your candidate to cast your Vote.
              </p>
              <p className="text-gray-700">
                -All Voting is anonymous, secure and fair.
              </p>
              <button className="bg-blue-800 w-56 text-center cursor-pointer rounded-4xl mt-2 text-white text-[14px] px-8 py-4">
                Get Started
              </button>
            </div>
            <div>
              <img className=" size-36" src={electionSide} alt="side" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Elections;
