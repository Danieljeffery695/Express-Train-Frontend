import React from "react";
import { FaEye } from "react-icons/fa";

const DashBoard_Updates: React.FC = () => {
  return (
    <div className="size-full">
      <div className="w-full h-[50px] flex items-center justify-center border-b-2">
        <div className="flex-2 flex gap-2.5 h-full items-center">
          <span className="h-full flex items-center justify-center">
            <FaEye size={"1.4rem"} />
          </span>
          <h3 className="text-xl font-Runtime">Recent Updates</h3>
        </div>
        <div className="flex-1 flex gap-1.5 justify-end items-center">
          <p className="text-xs font-mono">View all</p>
          <span className="h-full flex items-center justify-center">
            <FaEye size={"0.8rem"} />
          </span>
        </div>
      </div>

      <div className="size-full">
        <div className="w-full h-[60px] flex items-center gap-1 mt-1">
          <span className="size-[40px] flex-none rounded-[50%] flex items-center justify-center bg-amber-300">
            <FaEye size={"1.2rem"} />
          </span>
          <div className="w-[200px] flex-1 overflow-clip">
            <h2 className="text-base font-SairaStencil w-full line-clamp-2">
              Your Location ticket has been confirmed
            </h2>
          </div>
          <span className="w-[50px] flex-none text-xs font-Roboto text-gray-100 text-center">
            2h ago
          </span>
        </div>

        <div className="w-full h-[60px] flex items-center gap-1 mt-1">
          <span className="size-[40px] flex-none rounded-[50%] flex items-center justify-center bg-amber-300">
            <FaEye size={"1.2rem"} />
          </span>
          <div className="w-[200px] flex-1 overflow-clip">
            <h2 className="text-base font-SairaStencil w-full line-clamp-2">
              Train 204 departure time updated
            </h2>
          </div>
          <span className="w-[50px] flex-none text-xs font-Roboto text-gray-100 text-center">
            1h ago
          </span>
        </div>

        <div className="w-full h-[60px] flex items-center gap-1 mt-1">
          <span className="size-[40px] flex-none rounded-[50%] flex items-center justify-center bg-amber-300">
            <FaEye size={"1.2rem"} />
          </span>
          <div className="w-[200px] flex-1 overflow-clip">
            <h2 className="text-base font-SairaStencil w-full line-clamp-2">
              New route available:NY &#x2712; CH
            </h2>
          </div>
          <span className="w-[50px] flex-none text-xs font-Roboto text-gray-100 text-center">
            1d ago
          </span>
        </div>

        <div className="w-full h-[60px] flex items-center gap-1 mt-1">
          <span className="size-[40px] flex-none rounded-[50%] flex items-center justify-center bg-amber-300">
            <FaEye size={"1.2rem"} />
          </span>
          <div className="w-[200px] flex-1 overflow-clip">
            <h2 className="text-base font-SairaStencil w-full line-clamp-2">
              Special offer: 10% off on weekends trips
            </h2>
          </div>
          <span className="w-[50px] flex-none text-xs font-Roboto text-gray-100 text-center">
            2h ago
          </span>
        </div>
      </div>
    </div>
  );
};

export default DashBoard_Updates;
