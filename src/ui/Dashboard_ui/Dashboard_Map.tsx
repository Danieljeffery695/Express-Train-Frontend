import React from "react";
import { FaEye } from "react-icons/fa";

const DashBoard_Map: React.FC = () => {
  return (
    <div className="size-full relative bg-amber-500 rounded-2xl">
      <div className="w-[200px] h-[50px] flex p-1.5 bg-green-500 absolute top-2.5 left-[5px] gap-1.5 rounded-3xl">
        <button className="w-[75px] h-[40px] rounded-3xl bg-purple-400 text-base font-Cafillen cursor-pointer">
          Map
        </button>
        <button className="flex-1 h-[40px] rounded-3xl bg-green text-sm font-Cafillen cursor-pointer">
          Nearby Station
        </button>
      </div>

      <div className="w-[200px] h-[60px] absolute bottom-2.5 right-1 flex justify-center items-center">
        <button className="w-[180px] h-[50px] rounded-3xl bg-purple-400 flex items-center justify-center gap-1.5">
          <span className="w-[40px] h-full flex items-center justify-end">
            <FaEye size={"1.2rem"} />
          </span>
          <span className="flex-1 text-base font-Cafillen">View Full Map</span>
        </button>
      </div>
    </div>
  );
};

export default DashBoard_Map;
