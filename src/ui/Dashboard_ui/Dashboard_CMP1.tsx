import React from "react";
import { FaEye } from "react-icons/fa";

const DashBoard_CMP1: React.FC = () => {
  return (
    <div className="size-full p-1.5 flex justify-around">
      <div className="w-[150px] h-full bg-white rounded-2xl p-1.5 border border-gray-400 border-r-2 border-r-gray-500 flex flex-col justify-between">
        <span className="size-[55px] rounded-[50%] flex justify-center items-center bg-amber-200">
          <FaEye />
        </span>
        <h2 className="text-lg font-Playfair">Total Bookings</h2>
        <div className="w-full h-[80px] flex justify-between items-center">
          <h1 className="text-xl font-Roboto text-center">12</h1>
          <div className="w-[120px] h-[40px] flex items-center justify-end gap-1.5 px-1.5">
            <span className="">
              <FaEye size={"1.2rem"} />
            </span>
            <p className="text-xl font-Roboto font-light!">20%</p>
          </div>
        </div>
      </div>

      <div className="w-[150px] h-full bg-white rounded-2xl p-1.5 border border-gray-400 border-r-2 border-r-gray-500 flex flex-col justify-between">
        <span className="size-[55px] rounded-[50%] flex justify-center items-center bg-amber-200">
          <FaEye />
        </span>
        <h2 className="text-lg font-Playfair">Upcoming Tips</h2>
        <div className="w-full h-[80px] flex justify-between items-center">
          <h1 className="text-xl font-Roboto text-center">3</h1>
          <div className="w-[120px] h-[40px] flex items-center justify-end gap-1.5 px-1.5">
            <span className="">
              <FaEye size={"1.2rem"} />
            </span>
            <p className="text-xl font-Roboto font-light!">20%</p>
          </div>
        </div>
      </div>

      <div className="w-[150px] h-full bg-white rounded-2xl p-1.5 border border-gray-400 border-r-2 border-r-gray-500 flex flex-col justify-between">
        <span className="size-[55px] rounded-[50%] flex justify-center items-center bg-amber-200">
          <FaEye />
        </span>
        <h2 className="text-lg font-Playfair">Completed Tips</h2>
        <div className="w-full h-[80px] flex justify-between items-center">
          <h1 className="text-xl font-Roboto text-center">8</h1>
          <div className="w-[120px] h-[40px] flex items-center justify-end gap-1.5 px-1.5">
            <span className="">
              <FaEye size={"1.2rem"} />
            </span>
            <p className="text-xl font-Roboto font-light!">20%</p>
          </div>
        </div>
      </div>

      <div className="w-[150px] h-full bg-white rounded-2xl p-1.5 border border-gray-400 border-r-2 border-r-gray-500 flex flex-col justify-between">
        <span className="size-[55px] rounded-[50%] flex justify-center items-center bg-amber-200">
          <FaEye />
        </span>
        <h2 className="text-lg font-Playfair">Saved Routes</h2>
        <div className="w-full h-[80px] flex justify-between items-center">
          <h1 className="text-xl font-Roboto text-center">5</h1>
          <div className="w-[120px] h-[40px] flex items-center justify-end gap-1.5 px-1.5">
            <span className="">
              <FaEye size={"1.2rem"} />
            </span>
            <p className="text-xl font-Roboto font-light!">20%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard_CMP1;
