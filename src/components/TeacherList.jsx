import TeacherItem from "./TeacherItem";

function TeacherList({ teacher }) {
  console.log(teacher);
  return (
    <div className=" mt-3 flex gap-3 items-center flex-wrap w-[96%] mx-auto">
      {teacher.map((teacher, i) => (
        <TeacherItem key={i} teacher={teacher} />
      ))}
    </div>
  );
}

export default TeacherList;
