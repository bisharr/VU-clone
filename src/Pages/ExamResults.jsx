import Button from "../components/Button";
import Details from "../components/Details";
import LeftSide from "../components/LeftSide";
import PageTitle from "../components/PageTitle";
const examResults = [
  {
    moduleName: "Mathematics",
    result: "Pass",
    academicYear: "2024/2025",
    moduleCode: "MATH101",
    creditUnits: 3,
    score: 85,
    grade: "A",
    gradePoints: 4.0,
  },
  {
    moduleName: "Physics",
    result: "Fail",
    academicYear: "2024/2025",
    moduleCode: "PHYS101",
    creditUnits: 3,
    score: 45,
    grade: "D",
    gradePoints: 1.0,
  },
  {
    moduleName: "Computer Science",
    result: "Pass",
    academicYear: "2024/2025",
    moduleCode: "CS101",
    creditUnits: 4,
    score: 90,
    grade: "A+",
    gradePoints: 4.5,
  },
  // Add more data as needed
];

function ExamResults() {
  return (
    <div className="w-full flex">
      <div className="basis-1/5">
        <Button>
          <LeftSide />
        </Button>
      </div>
      <div className="flex-1 bg-gray-100 h-screen ">
        <Details />
        <PageTitle>Exam Results</PageTitle>
        {/* from Chatgpt */}
        <div className="max-w-6xl mx-auto p-6">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Exam Results
          </h2>
          <table className="min-w-full table-auto border-separate border-spacing-0">
            <thead className="bg-gray-100 text-[16px]">
              <tr>
                <th className="px-6 py-3 border-b text-left">Module</th>
                <th className="px-6 py-3 border-b text-left">Result</th>
                <th className="px-6 py-3 border-b text-left">Academic Year</th>
                <th className="px-6 py-3 border-b text-left">Code</th>
                <th className="px-6 py-3 border-b text-left">Credit Units</th>
                <th className="px-6 py-3 border-b text-left">Score</th>
                <th className="px-6 py-3 border-b text-left">Grade</th>
                <th className="px-6 py-3 border-b text-left">Grade Points</th>
              </tr>
            </thead>
            <tbody>
              {examResults.map((result, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } border-b border-gray-300`}
                >
                  <td className="px-6 py-4 ">{result.moduleName}</td>
                  <td className="px-6 py-4">{result.result}</td>
                  <td className="px-6 py-4">{result.academicYear}</td>
                  <td className="px-6 py-4">{result.moduleCode}</td>
                  <td className="px-6 py-4">{result.creditUnits}</td>
                  <td className="px-6 py-4">{result.score}</td>
                  <td className="px-6 py-4">{result.grade}</td>
                  <td className="px-6 py-4">{result.gradePoints}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ExamResults;
