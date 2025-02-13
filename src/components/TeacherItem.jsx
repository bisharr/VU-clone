import { Link } from "react-router-dom";

function TeacherItem({ teacher }) {
  return (
    <div className="w-85 pb-2.5  bg-blue-400 border-amber-200 shadow-2xs overflow-hidden rounded-xl">
      <img className="w-full h-40" src={teacher.photo} alt={teacher.id} />
      <div className="px-3">
        <h2 className="mt-2 font-bold ">Name: {teacher.name}</h2>
        <p className="">Subject: {teacher.subject}</p>
        <p className="">Gender: {teacher.gender}</p>
        <p className="">qualification: {teacher.qualification}</p>
        <Link to={`${teacher.id}`}>
          <button className="mt-3 bg-red-500 px-3 py-0.5 text-center rounded-[5px] text-white">
            More Detail
          </button>
        </Link>
      </div>
    </div>
  );
}

export default TeacherItem;
