import { useState } from "react";
import Button from "../components/Button";
import Details from "../components/Details";
import LeftSide from "../components/LeftSide";
import PageTitle from "../components/PageTitle";

function Financial() {
  const [totalFees, setTotalfees] = useState(500);
  const [paidSofar, setPaidsofar] = useState(380);

  const percentagePaid = (paidSofar / totalFees) * 100;
  return (
    <div className="flex flex-row flex-wrap w-full min-h-screen">
      {/* Sidebar */}
      <div className=" md:basis-1/5">
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
              <div className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                  />
                </svg>
                <div>
                  <p className="text-xl font-semibold">USD {totalFees}</p>
                  <p className="text-gray-600 text-[12px]">
                    Total Fees Payable
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="text-xl font-semibold text-green-500">
                USD {paidSofar}
              </p>
              <p className="text-gray-600">Paid So Far</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="text-xl font-semibold text-red-600">
                USD
                {totalFees - paidSofar}
              </p>
              <p className="text-gray-600">Debit Balance</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="text-xl font-semibold text-green-500">{`USD ${
                paidSofar > totalFees ? paidSofar - totalFees : "0"
              }`}</p>
              <p className="text-gray-600">Credit Balance</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md text-center flex flex-col gap-1.5  items-center">
              <progress
                className="w-[90%]  h-4 appearance-none overflow-hidden 
  bg-white rounded-lg 
  [&::-webkit-progress-bar]:bg-gray-200 
  [&::-webkit-progress-value]:bg-green-500 [&::-webkit-progress-value]:rounded-lg 
  [&::-moz-progress-bar]:bg-green-500"
                value={paidSofar}
                max={totalFees}
              ></progress>

              <p className="text-gray-600 mt-2">
                {percentagePaid}% Paid So Far
              </p>
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
