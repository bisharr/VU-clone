import Button from "../components/Button";
import Details from "../components/Details";
import LeftSide from "../components/LeftSide";
// import PageTitle from "../components/PageTitle";
import HomeRighSide from "./HomeRighSide";

function Home({ fullname, regNo, openMenu, setOpenMenu }) {
  return (
    <div className="w-full flex">
      <div className=" md:basis-1/5 ">
        <Button>
          <LeftSide openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </Button>
      </div>
      <div className="flex-1 w-full bg-gray-100 h-screen overflow-scroll scrol p-2 ">
        <Details
          fullname={fullname}
          regNo={regNo}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
        />
        <HomeRighSide />
      </div>
    </div>
  );
}

export default Home;
