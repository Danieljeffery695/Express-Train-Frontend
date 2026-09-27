import React from "react";
import { FaEye } from "react-icons/fa";

const DashboardSearch: React.FC = () => {
  return (
    <div className="size-full flex bg-gray-500 gap-1.5">
      <form className="flex-2 flex items-center px-1 relative">
        <span className="size-[30px] absolute top-[40%] left-[25px] z-10">
          <FaEye size={"1.4rem"} />
        </span>
        <input
          type="text"
          name="dashboard-search"
          className="w-full h-[70px] rounded-[50px] bg-gray-600 px-[70px] text-base font-Playfair font-medium outline-0 border-0"
          placeholder="Search for Routes, station, or train numbers.."
        />
        <span className="absolute top-[40%] right-[25px] z-10">
          <FaEye size={"1.4rem"} />
        </span>
      </form>

      <div className="flex-1 flex">
        <div className=" flex items-center">
          <span>
            <FaEye size={"1.4rem"} />
          </span>
          <hr className="rotate-90 border-2 w-12" />
        </div>

        <div className="flex-1 flex items-center">
          <span className="size-[50px] bg-blue-400 rounded-[50%]"></span>
          <div className="w-full h-[50px] flex-1 flex flex-col items-center gap-1">
            <h3 className="font-Cafillen text-lg font-medium hyphens-auto">
              Daniel
            </h3>
            <p className="font-Runtime text-base">Traveler</p>
          </div>
          <span>
            <FaEye size={"1.4rem"} />
          </span>
        </div>

        <div className="flex-1 flex items-center">
          <hr className="rotate-90 border-2 w-[45px]" />
          <span>
            <FaEye size={"1.4rem"} />
          </span>
          <div className="w-full h-[50px] flex-1 flex flex-col items-center gap-1">
            <h3 className="font-Cafillen text-lg font-medium">Daniel</h3>
            <p className="font-Runtime text-base">Traveler</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSearch;
