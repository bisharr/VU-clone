import Calendar from "../components/Calender";
import HomeSlides from "../components/HomeSlides";

function HomeRighSide() {
  return (
    // Home both details
    <div className="flex gap-x-3 w-[96%] mx-auto  mt-3 h-screen ">
      <HomeSlides />
      <div className="flex-1">
        <Calendar />
      </div>
    </div>
  );
}

export default HomeRighSide;
