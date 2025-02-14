import students from "../assets/students.png";
import ModuleAction from "./ModuleAction";
import ModuleItems from "./ModuleItems";
import ModulesList from "./ModulesList";
import TrimesterYear from "./TrimesterYear";
import YearModule from "./YearModule";

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
      <YearModule>1</YearModule>
      <TrimesterYear>1</TrimesterYear>
      <ModulesList>
        <ModuleItems>Introduction to Ict</ModuleItems>
        <ModuleItems>Communication Skills</ModuleItems>
        <ModuleItems>Computer Architecture and Organisation</ModuleItems>
        <ModuleItems>Exploring My Story; Creating My Paths</ModuleItems>
        <ModuleItems>Fundamentals of Information Systems</ModuleItems>
      </ModulesList>
      {/* Trimester 2 */}
      <TrimesterYear>2</TrimesterYear>
      <ModulesList>
        <ModuleItems>Programming Fundamentals</ModuleItems>
        <ModuleItems>Mathematics for It Professionals</ModuleItems>
        <ModuleItems>Business Statistics</ModuleItems>
        <ModuleItems>Systems Analysis and Design</ModuleItems>
        <ModuleItems>Career Readiness Skills</ModuleItems>
      </ModulesList>
      {/* Trimester 3 */}
      <TrimesterYear>3</TrimesterYear>
      <ModulesList>
        <ModuleItems>Internet Technology and Web Design</ModuleItems>
        <ModuleItems>Object Oriented Programming</ModuleItems>
        <ModuleItems>Application Development and Database Design</ModuleItems>
        <ModuleItems>Preparing to Enter the World of Work</ModuleItems>
        <ModuleItems>Ethical and Professional Issues in It</ModuleItems>
      </ModulesList>
      {/* Year 2 */}
      <YearModule>2</YearModule>
      <TrimesterYear>1</TrimesterYear>
      <ModulesList>
        <ModuleItems>Data Communication and Networking</ModuleItems>
        <ModuleItems>Database Management Systems 1</ModuleItems>
        <ModuleItems>Geographical Information Systems</ModuleItems>
        <ModuleItems>Entrepreneurship</ModuleItems>
        <ModuleItems>
          Soft Skills to Get and Keep a Job. Communications and Interpersonal
          Skills
        </ModuleItems>
      </ModulesList>
    </div>
  );
}

export default ModulesFront;
