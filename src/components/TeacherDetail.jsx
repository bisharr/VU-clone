import { useParams, Link } from "react-router-dom";
import Button from "./Button";
import LeftSide from "./LeftSide";
import Details from "./Details";

function TeacherDetail({ teacher }) {
  const { id } = useParams(); // Get the teacher ID from the URL
  const selectedTeacher = teacher.find((t) => t.id === parseInt(id)); // Find teacher by ID

  if (!selectedTeacher) {
    return <p className="text-center mt-5 text-red-500">Teacher not found!</p>;
  }

  return (
    <div className="w-full flex">
      <div className="basis-1/5">
        <Button>
          <LeftSide />
        </Button>
      </div>
      <div className="flex-1 bg-gray-100 h-screen overflow-scroll scrol ">
        <Details />
        <div className="w-[96%] mb-4 mx-auto mt-4 pb-2.5 bg-gray-300 border-amber-200 shadow-2xs overflow-hidden rounded-xl">
          <img
            className="w-full h-80 object-fill"
            src={selectedTeacher.photo}
            alt={selectedTeacher.name}
          />
          <div className="px-3">
            <h2 className="mt-2 font-bold">Name: {selectedTeacher.name}</h2>
            <p className="font-semibold text-gray-900 mt-2 mb-3">
              Desc: {selectedTeacher.description}
            </p>
            <p>Age: {selectedTeacher.age}</p>
            <p>Phone: {selectedTeacher.phone}</p>
            <p>Available Time: {selectedTeacher.availability.time}</p>
            <div className="flex gap-x-2 items-center">
              Available Days:
              {selectedTeacher.availability.days.map((day, index) => (
                <p key={index}>{day}</p>
              ))}
            </div>
            <p>Experience: {selectedTeacher.experience}</p>
            <a
              className=" font-medium text-gray-500"
              href={`mailto:${selectedTeacher.email}`}
            >
              Email:{selectedTeacher.email}
            </a>

            <div className="flex gap-x-1.5 items-center mt-2">
              Skills:
              {selectedTeacher.skills.map((skill, index) => (
                <button
                  className="bg-blue-900 text-center px-3 py-1 text-white rounded-[6px]"
                  key={index}
                >
                  {skill}
                </button>
              ))}
            </div>

            {/* Back to Teacher List */}
            <Link to="/teachers">
              <button className="mt-3 bg-gray-800 px-7 py-0.5 text-center rounded-[5px] text-white">
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>

    // test
  );
}

export default TeacherDetail;
