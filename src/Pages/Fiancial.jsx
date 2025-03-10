import Button from "../components/Button";
import Details from "../components/Details";
import LeftSide from "../components/LeftSide";
import PageTitle from "../components/PageTitle";

function Fiancial() {
  return (
    <div className="w-full flex">
      <div className="basis-1/5">
        <Button>
          <LeftSide />
        </Button>
      </div>
      <div className="flex-1 bg-gray-100 h-screen ">
        <Details />
        <PageTitle>Payments</PageTitle>
        <h2>
          <strong>Billing trimester</strong> october 17 2014
        </h2>
        <progress
          className="w-20 h-20 progress-rounded"
          value={100}
          max={100}
        />
      </div>
    </div>
  );
}

export default Fiancial;
