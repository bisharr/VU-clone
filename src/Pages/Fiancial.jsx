import Button from "../components/Button";
import Details from "../components/Details";
import LeftSide from "../components/LeftSide";
import PageTitle from "../components/PageTitle";

function Financial() {
  return (
    <div className="flex flex-row flex-wrap w-full min-h-screen">
      {/* Sidebar */}
      <div className=" basis-1/5">
        <Button>
          <LeftSide />
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6 flex flex-col">
        <Details />
        <PageTitle>Payments</PageTitle>

        <div className="mt-4 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-blue-700">Payments</h2>
          <p className="text-gray-600 font-semibold">
            Billing Trimester:{" "}
            <span className="text-black">OCTOBER TRIMESTER 2024</span>
          </p>

          {/* Payment Details */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="text-xl font-semibold">USD 204.0</p>
              <p className="text-gray-600">Total Fees Payable</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="text-xl font-semibold text-green-500">USD 205.5</p>
              <p className="text-gray-600">Paid So Far</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="text-xl font-semibold text-red-600">USD 0.0</p>
              <p className="text-gray-600">Debit Balance</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="text-xl font-semibold text-green-500">USD 1.5</p>
              <p className="text-gray-600">Credit Balance</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md text-center flex flex-col items-center">
              <progress
                className="w-20 h-20 appearance-none [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-value]:rounded-full [&::-moz-progress-bar]:rounded-full"
                value="76"
                max="100"
              ></progress>
              <p className="text-gray-600 mt-2">78% Paid So Far</p>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-col md:flex-row gap-4">
            <select className="border p-2 rounded-md w-full md:w-auto">
              <option>Change Trimester</option>
            </select>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center">
              📄 Download as PDF
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center">
              💰 Make Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Financial;
