import React from "react";
import { FaEye } from "react-icons/fa";

const DashBoardCMP: React.FC = () => {
  return (
    <div className="size-full flex flex-col -gap-2.5 p-1">
      <div className="w-full h-[240px] flex justify-between flex-2 bg-purple-400 rounded-2xl pt-[40px]">
        <div className="h-[200px] flex flex-col gap-1.5 px-2.5">
          <div className="w-[250px] h-[40px] flex gap-2.5">
            <h3 className="text-xl font-Cafillen">Next Journey</h3>
            <span className="w-[120px] h-[30px] rounded-3xl bg-green-300 text-black text-center text-base font-Runtime">
              Confirmed
            </span>
          </div>

          <p className="text-xl font-Runtime">Location</p>
          <h1 className="text-xl font-Runtime">LC</h1>

          <p className="text-xl font-Runtime">8:50</p>

          <p className="text-xl font-Runtime">Thu, Sep 30, 2026</p>
        </div>

        <div className="justify-self-end flex flex-col gap-1.5 px-2.5">
          <h3 className="text-xl font-Cafillen">Destine Location</h3>
          <h1 className="text-xl font-Runtime">DLC</h1>
          <p className="text-xl font-Runtime">14:10</p>
          <p className="text-xl font-Runtime">Thu, Sep 30, 2026</p>
        </div>
      </div>

      <div className="w-full h-[100px] flex items-center justify-center gap-2.5 py-1.5 bg-gray-600 rounded-2xl -mt-6">
        <div className="h-[50px] flex items-center gap-1.5 border-r-2">
          <span className="size-[44px] rounded-[50%] flex justify-center items-center bg-amber-200">
            <FaEye />
          </span>
          <div className="w-[90px] h-full flex flex-col items-center justify-center">
            <h2 className="text-lg font-SairaStencil">Train 204</h2>
            <p className="text-base font-Playfair font-medium">Express</p>
          </div>
        </div>

        <div className="h-[50px] flex items-center gap-1.5 border-r-2">
          <span className="size-[44px] rounded-[50%] flex justify-center items-center bg-amber-200">
            <FaEye />
          </span>
          <div className="w-[90px] h-full flex flex-col items-center justify-center">
            <h2 className="text-lg font-SairaStencil">Coach 04</h2>
            <p className="text-base font-Playfair font-medium">Economy</p>
          </div>
        </div>

        <div className="h-[50px] flex items-center gap-1">
          <span className="size-[44px] rounded-[50%] flex justify-center items-center bg-amber-200">
            <FaEye />
          </span>
          <div className="w-[90px] h-full flex flex-col items-center justify-center border-r-2">
            <h2 className="text-lg font-SairaStencil">Seat 18A</h2>
            <p className="text-base font-Playfair font-medium">Window</p>
          </div>
          <button className="w-[150px] h-[40px] rounded-4xl bg-white">
            view Ticket
            <span className="inline-block pl-1.5">
              <FaEye />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashBoardCMP;
