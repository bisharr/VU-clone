import { useParams } from "react-router-dom";

function TeacherDetail({ teacher }) {
  const { id } = useParams();

  const teachers = teacher.find((product) => product.id === parseInt(id));
  console.log(teachers);

  return (
    <div className="w-190 mt-4 pb-2.5  bg-gray-300 border-amber-200 shadow-2xs overflow-hidden rounded-xl">
      <img
        className="w-full h-70 object-fill"
        src={teacher[0].photo}
        alt={teacher.id}
      />
      <div className="px-3">
        <h2 className="mt-2 font-bold ">Name: {teacher[0].name}</h2>
        <p className=" font-semibold space-x-1 text-gray-900 mt-2 mb-3">
          Desc : {teacher[0].description}
        </p>
        <p>Age: {teacher[0].age}</p>
        <p className="">Phone: {teacher[0].phone}</p>
        <p className="">Available Time: {teacher[0].availability.time}</p>
        <div className="flex gap-x-2 items-center">
          Available Days:
          {teacher[0].availability.days.map((day, index) => (
            <p key={index}>{day}</p>
          ))}
        </div>
        <p className="">Experience: {teacher[0].experience}</p>
        <p className="">email: {teacher[0].email}</p>
        <div className="flex gap-x-1.5 items-center mt-2">
          Skills:
          {teacher[0].skills.map((skils, index) => (
            <button
              className="bg-blue-900 text-center px-3 py-1 text-white rounded-[6px]"
              key={index}
            >
              {skils}
            </button>
          ))}
        </div>
        <div></div>

        <button className="mt-3 bg-gray-800 px-7 py-0.5 text-center rounded-[5px] text-white">
          back
        </button>
      </div>
    </div>
  );
}

export default TeacherDetail;
