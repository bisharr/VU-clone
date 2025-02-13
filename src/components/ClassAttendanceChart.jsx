import { Line } from "recharts";
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const getLast7Days = () => {
  const days = [];
  for (let i = 6; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    days.push({
      date: date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      marks: Math.floor(Math.random() * 101), // Random marks between 0 and 100
    });
  }
  return days;
};

const data = getLast7Days();
const firstDate = new Date();
firstDate.setDate(firstDate.getDate() - 6);
const lastDate = new Date();

function ClassAttendanceChart() {
  return (
    <div className="w-full  p-4 bg-white shadow-lg rounded-2xl">
      <h2 className="text-xl font-bold text-center mb-2">
        Class Attendance of Last 7 Days
      </h2>
      <h3 className="text-md text-center text-gray-600 mb-4">
        {firstDate.toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}{" "}
        -{" "}
        {lastDate.toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="marks"
            stroke="#8884d8"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ClassAttendanceChart;
