import { useNavigate } from "react-router-dom";
import coverImg from "../assets/grouppic.jpg";
import logo from "../assets/logo.png";

function LoginPage({ fullname, regNo, setFullname, setRegno }) {
  const navigateTOhome = useNavigate();
  function onAdd(e) {
    e.preventDefault();
    if (!fullname) return;
    if (!regNo) return;

    navigateTOhome("/home");
    setFullname("");
  }
  return (
    <div className="flex  border-2 p-1.5 py-3.5 h-screen w-screen bg-white ">
      <div className="flex flex-col items-center gap-2.5  w-[100%] md:w-[50%] mt-1.5 ">
        <div className="p-1 flex flex-col justify-center  items-center mt-5 mb-7">
          <img className=" h-18" src={logo} alt="" />
          <h2 className="text-2xl font-bold text-gray-700">
            VICTORIA UNIVERSITY
          </h2>
          <span className="text-[16px] text-gray-400">Students Portal</span>
        </div>
        <form onSubmit={onAdd} className="flex flex-col gap-1.5   rounded-2xl">
          <span className="text-left text-[15px] text-gray-800 font-bold space-x-1.5">
            Enter Your Details to Login
          </span>
          <input
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            className=" border-gray-300 border-1 text-gray-500 text-[15px] rounded p-1.5 px-3 focus:border-none"
            placeholder="Enter Your Name"
          />
          <input
            placeholder="Enter Your Reg Number"
            value={regNo}
            onChange={(e) => setRegno(e.target.value)}
            className=" border-1 text-gray-500 text-[14px] border-gray-300 placeholder:text-gray-400 rounded p-1.5 px-3 focus:border-gray-200"
          />
          <div className="flex text-[14px] py-1 text-gray-500 items-center gap-0">
            <input className=" text-left" type="checkbox" />
            <span>Remember me </span>
          </div>

          <button
            onClick={onAdd}
            className="mr-1.5 text-center text-white border-0 bg-blue-500 w-[100%] px-4 rounded py-2 cursor-pointer"
          >
            Sign in
          </button>
        </form>
      </div>
      <div className=" w-[60%] h-[100%] hidden md:flex">
        <img src={coverImg} alt="img" className="w-[100%] h-[100%]" />
      </div>
    </div>
  );
}

export default LoginPage;
