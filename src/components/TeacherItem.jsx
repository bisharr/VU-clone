import { Link } from "react-router-dom";

function TeacherItem({ teacher }) {
  return (
    <div className="w-full md:w-80  pb-2.5 bg-blue-400 border-amber-200 shadow-2xs overflow-hidden rounded-xl">
      <img
        className="w-full h-auto  max-h-[400px] object-cover"
        src={teacher.photo}
        alt={teacher.name}
      />
      <div className="p-3">
        <h2 className="mt-2 font-bold">Name: {teacher.name}</h2>
        <p>Subject: {teacher.subject}</p>
        <p>Gender: {teacher.gender}</p>
        <p>Qualification: {teacher.qualification}</p>

        {/* Link to the Teacher Detail page */}
        <Link className="cursor-pointer" to={`/teachers/${teacher.id}`}>
          <button className="mt-3 bg-red-500 hover:bg-red-700 transition-all delay-150 px-3 cursor-pointer py-0.5 text-center rounded-[5px] text-white">
            More Detail
          </button>
        </Link>
      </div>
    </div>
  );
}

export default TeacherItem;
