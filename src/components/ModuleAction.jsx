function ModuleAction() {
  return (
    <div className="flex items-center justify-end gap-x-2 mt-4">
      <button className="bg-red-500 font-semibold cursor-pointer  p-1.5 px-5 text-white rounded text-center text-[16px] ">
        Choose your Moduls
      </button>
      <button className="bg-blue-500 font-semibold cursor-pointer  p-1.5 px-5 text-white rounded text-center text-[16px] ">
        Apply resits & retakes
      </button>
      <button className="bg-blue-500 font-semibold cursor-pointer  p-1.5 px-5 text-white rounded text-center text-[16px] ">
        More Actions
      </button>
    </div>
  );
}

export default ModuleAction;
