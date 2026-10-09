import React from "react";
import { FaEye } from "react-icons/fa";

const DashBoard_NearbyTrain: React.FC = () => {
  return (
    <div className="size-full">
      <div className="w-full h-[50px] flex">
        <div className="flex-2 flex items-center pl-2 gap-2.5">
          <span>
            <FaEye size={"1.3rem"} />
          </span>
          <h2 className="text-base font-Runtime font-light">
            Nearby Train Stations
          </h2>
        </div>

        <div className="flex-1">
          <div className="size-full flex items-center justify-end pr-2.5 gap-2.5">
            <p className="text-xs font-Playfair font-light">View all</p>
            <span>
              <FaEye size={"0.8rem"} />
            </span>
          </div>
        </div>
      </div>

      <div className="size-full">
        <div className="w-full h-[60px] flex gap-1 items-center border-t-2 border-t-slate-400 mt-2">
          <span className="size-[40px] flex items-center justify-center rounded-[50%] bg-amber-400">
            <FaEye />
          </span>

          <div className="flex-2">
            <h3 className="text-base font-Roboto truncate w-[120px]">
              Name of Station
            </h3>
            <p className="text-xs font-Runtime">2.3km</p>
          </div>

          <div className="flex-1 flex items-center justify-center gap-2">
            <div className="w-[90px] h-[30px] text-center bg-green-300 rounded-3xl flex items-center justify-center">
              <span className="text-xs font-mono font-medium text-green-500">
                Main Station
              </span>
            </div>
            <span className="pr-1">
              <FaEye />
            </span>
          </div>
        </div>

        <div className="w-full h-[60px] flex gap-1 items-center border-t-2 border-t-slate-400 mt-2">
          <span className="size-[40px] flex items-center justify-center rounded-[50%] bg-amber-400">
            <FaEye />
          </span>

          <div className="flex-2">
            <h3 className="text-base font-Roboto truncate w-[120px]">
              Name of Station
            </h3>
            <p className="text-xs font-Runtime">2.3km</p>
          </div>

          <div className="flex-1 flex items-center justify-center gap-2">
            <div className="w-[90px] h-[30px] text-center bg-green-300 rounded-3xl flex items-center justify-center">
              <span className="text-xs font-mono font-medium text-green-500">
                Operational
              </span>
            </div>
            <span className="pr-1">
              <FaEye />
            </span>
          </div>
        </div>

        <div className="w-full h-[60px] flex gap-1 items-center border-t-2 border-t-slate-400 mt-2">
          <span className="size-[40px] flex items-center justify-center rounded-[50%] bg-amber-400">
            <FaEye />
          </span>

          <div className="flex-2">
            <h3 className="text-base font-Roboto truncate w-[120px]">
              Name of Station
            </h3>
            <p className="text-xs font-Runtime">2.3km</p>
          </div>

          <div className="flex-1 flex items-center justify-center gap-2">
            <div className="w-[90px] h-[30px] text-center bg-green-300 rounded-3xl flex items-center justify-center">
              <span className="text-xs font-mono font-medium text-green-500">
                Operational
              </span>
            </div>
            <span className="pr-1">
              <FaEye />
            </span>
          </div>
        </div>

        <div className="w-full h-[60px] flex gap-1 items-center border-t-2 border-t-slate-400 mt-2">
          <span className="size-[40px] flex items-center justify-center rounded-[50%] bg-amber-400">
            <FaEye />
          </span>

          <div className="flex-2">
            <h3 className="text-base font-Roboto truncate w-[120px]">
              Name of Station
            </h3>
            <p className="text-xs font-Runtime">2.3km</p>
          </div>

          <div className="flex-1 flex items-center justify-center gap-2">
            <div className="w-[90px] h-[30px] text-center bg-green-300 rounded-3xl flex items-center justify-center">
              <span className="text-xs font-mono font-medium text-green-500">
                Operational
              </span>
            </div>
            <span className="pr-1">
              <FaEye />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard_NearbyTrain;
