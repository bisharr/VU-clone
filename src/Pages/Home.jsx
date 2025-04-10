import Button from "../components/Button";
import Details from "../components/Details";
import LeftSide from "../components/LeftSide";
// import PageTitle from "../components/PageTitle";
import HomeRighSide from "./HomeRighSide";

function Home({ fullname, regNo }) {
  return (
    <div className="w-full flex">
      <div className="basis-1/5">
        <Button>
          <LeftSide />
        </Button>
      </div>
      <div className="flex-1 bg-gray-100 h-screen overflow-scroll scrol ">
        <Details fullname={fullname} regNo={regNo} />
        <HomeRighSide />
      </div>
    </div>
  );
}

export default Home;
