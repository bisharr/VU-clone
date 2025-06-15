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
  const downloadCSV = () => {
    const headers = [
      "Module",
      "Result",
      "Academic Year",
      "Code",
      "Credit Units",
      "Score",
      "Grade",
      "Grade Points",
    ];

    const csvRows = [
      headers.join(","), // First row (headers)
      ...examResults.map((result) =>
        [
          result.moduleName,
          result.result,
          result.academicYear,
          result.moduleCode,
          result.creditUnits,
          result.score,
          result.grade,
          result.gradePoints,
        ]
          .map((val) => `"${val}"`) // wrap in quotes to avoid issues with commas
          .join(",")
      ),
    ];

    const csvContent = csvRows.join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.setAttribute("download", "exam_results.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full flex">
      <div className="Md:basis-1/5">
        <Button>
          <LeftSide />
        </Button>
      </div>
      <div className="flex-1 bg-gray-100 px-4 py-6 ">
        <Details />
        <PageTitle>Exam Results</PageTitle>
        {/* from Chatgpt */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
            📊 Exam Results
          </h2>

          <div className="flex justify-start mb-4 cursor-pointer">
            <button
              onClick={downloadCSV}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow transition-all duration-200"
            >
              ⬇️ Download CSV
            </button>
          </div>

          <div className="w-full overflow-x-auto bg-white shadow-md rounded-xl">
            <table className=" min-w-full md:w-full text-sm text-left border-collapse">
              <thead className="bg-gray-100 text-gray-700 text-base">
                <tr>
                  <th className="px-4 py-3 border border-gray-200">Module</th>
                  <th className="px-4 py-3 border border-gray-200">Result</th>
                  <th className="px-4 py-3 border border-gray-200">
                    Academic Year
                  </th>
                  <th className="px-4 py-3 border border-gray-200">Code</th>
                  <th className="px-4 py-3 border border-gray-200">
                    Credit Units
                  </th>
                  <th className="px-4 py-3 border border-gray-200">Score</th>
                  <th className="px-4 py-3 border border-gray-200">Grade</th>
                  <th className="px-4 py-3 border border-gray-200">
                    Grade Points
                  </th>
                </tr>
              </thead>
              <tbody>
                {examResults.map((result, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-blue-50 transition-all`}
                  >
                    <td className="px-4 py-3 border border-gray-200">
                      {result.moduleName}
                    </td>
                    <td className="px-4 py-3 border border-gray-200">
                      {result.result}
                    </td>
                    <td className="px-4 py-3 border border-gray-200">
                      {result.academicYear}
                    </td>
                    <td className="px-4 py-3 border border-gray-200">
                      {result.moduleCode}
                    </td>
                    <td className="px-4 py-3 border border-gray-200">
                      {result.creditUnits}
                    </td>
                    <td className="px-4 py-3 border border-gray-200">
                      {result.score}
                    </td>
                    <td className="px-4 py-3 border border-gray-200">
                      {result.grade}
                    </td>
                    <td className="px-4 py-3 border border-gray-200">
                      {result.gradePoints}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExamResults;
