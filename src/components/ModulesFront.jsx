import students from "../assets/students.png";
import ModuleAction from "./ModuleAction";

function ModulesFront() {
  return (
    <div className="w-[96%] mx-auto ">
      <div className="text-white p-3 bg-blue-500  flex rounded-[5px] ">
        <div className="p-3 flex items-center justify-between w-full">
          <div className="">
            <h3 className=" font-bold text-[22px] mb-2.5">
              Bachelor of Science in Computer Science
            </h3>
            <p className=" text-[16px] ">Intake: March Intake 2023 / 2.3</p>
            <p className=" text-[16px] ">Duration: 3 years</p>
            <p className=" text-[16px] ">Modules: 38 Modules</p>
          </div>
          <div>
            <img src={students} className=" size-24" alt="student" />
          </div>
        </div>
      </div>
      <ModuleAction />
    </div>
  );
}

export default ModulesFront;
