import React from "react";
import DashBoardSearch from "./Dashboard_Search";
import DashBoardCMP from "./Dashboard_CMP";
import DashBoard_CMP1 from "./Dashboard_CMP1";
import { FaEye } from "react-icons/fa";
import DashBoard_Map from "./Dashboard_Map";
import DashBoard_NearbyTrain from "./Dashboard_NearbyTrain";
import DashBoard_Updates from "./Dashboard_Updates";

const DashBoardLayout: React.FC = () => {
  return (
    <div className="w-full h-full flex">
      <div className="w-[20%] h-screen fixed bg-amber-500">
        <div className="w-full h-[70px] flex justify-around items-center px-1.5">
          <div className="w-[120px] h-[50px]">
            <img
              src="train-header-station.png"
              alt="train-logo"
              className="size-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-lg font-SuperSlice">RAILWAY</h2>
            <p className="text-sm font-Roboto">Travel Beyond Limits</p>
          </div>
        </div>

        <div className="w-full h-[430px] flex flex-col gap-2 items-center pb-2.5">
          <div className="w-[90%] h-[50px] flex items-center justify-evenly rounded-2xl px-[12px]">
            <span className="flex-1">
              <FaEye size={"1.7rem"} />
            </span>

            <p className="flex-2">Overview</p>

            <span className="ml-auto size-[30px] rounded-[50%] bg-red-500 text-center">
              3
            </span>
          </div>

          <div className="w-[90%] h-[50px] flex items-center justify-evenly rounded-2xl px-[12px]">
            <span className="flex-1">
              <FaEye size={"1.7rem"} />
            </span>

            <p className="flex-2">Book a Train</p>

            <span className="ml-auto size-[30px] rounded-[50%] bg-red-500 text-center">
              3
            </span>
          </div>

          <div className="w-[90%] h-[50px] flex items-center justify-evenly rounded-2xl px-[12px]">
            <span className="flex-1">
              <FaEye size={"1.7rem"} />
            </span>

            <p className="flex-2">My Tickets</p>

            <span className="ml-auto size-[30px] rounded-[50%] bg-red-500 text-center">
              3
            </span>
          </div>

          <div className="w-[90%] h-[50px] flex items-center justify-evenly rounded-2xl px-[12px]">
            <span className="flex-1">
              <FaEye size={"1.7rem"} />
            </span>

            <p className="flex-2">My Journey</p>

            <span className="ml-auto size-[30px] rounded-[50%] bg-red-500 text-center">
              3
            </span>
          </div>

          <div className="w-[90%] h-[50px] flex items-center justify-evenly rounded-2xl px-[12px]">
            <span className="flex-1">
              <FaEye size={"1.7rem"} />
            </span>

            <p className="flex-2">Routes</p>

            <span className="ml-auto size-[30px] rounded-[50%] bg-red-500 text-center">
              3
            </span>
          </div>

          <div className="w-[90%] h-[50px] flex items-center justify-evenly rounded-2xl px-[12px]">
            <span className="flex-1">
              <FaEye size={"1.7rem"} />
            </span>

            <p className="flex-2">Saved Routes</p>

            <span className="ml-auto size-[30px] rounded-[50%] bg-red-500 text-center">
              3
            </span>
          </div>

          <div className="w-[90%] h-[50px] flex items-center justify-evenly rounded-2xl px-[12px]">
            <span className="flex-1">
              <FaEye size={"1.7rem"} />
            </span>

            <p className="flex-2">Notifications</p>

            <span className="ml-auto size-[30px] rounded-[50%] bg-red-500 text-center">
              3
            </span>
          </div>

          <hr className="border-0 h-0.5 w-[90%] bg-black mt-1.5" />
        </div>

        <div className="w-full h-full flex flex-col gap-2 items-center pt-2.5">
          <div className="w-[90%] h-[50px] flex items-center justify-evenly rounded-2xl px-[12px]">
            <span className="flex-1">
              <FaEye size={"1.7rem"} />
            </span>

            <p className="flex-2">Settings</p>

            <span className="ml-auto size-[30px] rounded-[50%] bg-red-500 text-center">
              3
            </span>
          </div>

          <div className="w-[90%] h-[50px] flex items-center justify-evenly rounded-2xl px-[12px]">
            <span className="flex-1">
              <FaEye size={"1.7rem"} />
            </span>

            <p className="flex-2">Profile</p>

            <span className="ml-auto size-[30px] rounded-[50%] bg-red-500 text-center">
              3
            </span>
          </div>
          <div className="w-full h-[120px]">
            <img
              src="train-header-station.png"
              alt="train-pics"
              className="size-full object-cover object-center"
            />
          </div>
        </div>
      </div>

      <div className="flex-2 grid grid-cols-4 ml-[20%] gap-1.5 h-[1000px] pb-5 pl-0">
        {/* //Once i insert all components and styling to each grids elements. i */}
        {/* will remove the fixed background  */}
        <div className="bg-white col-span-full">
          <div className="w-full h-[100px]">
            <DashBoardSearch />
          </div>
          <div className="w-[400px] h-[80px] pl-2.5">
            <h1 className="text-2xl font-Playfair">Good morning, Daniel 👋 </h1>
            <p className="text-sm font-Runtime">
              Your next journey is just a few clicks away.
            </p>
          </div>
          <div className="w-full h-[125px] flex pl-2.5">
            <div className="w-[280px] h-[110px] relative overflow-hidden p-2.5 bg-red-500 rounded-lg mx-1.5">
              <FaEye size={"2.4rem"} />
              <h2 className="text-base font-Playfair">Book a Train</h2>
              <div className="absolute left-[80%] top-[40%] bg-amber-400 w-[70px] h-[40px] flex justify-center items-center">
                <FaEye />
              </div>
              <p className="text-sm font-Runtime">
                Find and book your next trip
              </p>
            </div>
            <div className="w-[280px] h-[110px] relative overflow-hidden p-2.5 bg-red-500 rounded-lg mx-1.5">
              <FaEye size={"2.4rem"} />
              <h2 className="text-base font-Playfair">Book a Train</h2>
              <div className="absolute left-[80%] top-[40%] bg-amber-400 w-[70px] h-[40px] flex justify-center items-center">
                <FaEye />
              </div>
              <p className="text-sm font-Runtime">
                Find and book your next trip
              </p>
            </div>
            <div className="w-[280px] h-[110px] relative overflow-hidden p-2.5 bg-red-500 rounded-lg mx-1.5">
              <FaEye size={"2.4rem"} />
              <h2 className="text-base font-Playfair">Book a Train</h2>
              <div className="absolute left-[80%] top-[40%] bg-amber-400 w-[70px] h-[40px] flex justify-center items-center">
                <FaEye />
              </div>
              <p className="text-sm font-Runtime">
                Find and book your next trip
              </p>
            </div>
            <div className="w-[280px] h-[110px] relative overflow-hidden p-2.5 bg-red-500 rounded-lg mx-1.5">
              <FaEye size={"2.4rem"} />
              <h2 className="text-base font-Playfair">Book a Train</h2>
              <div className="absolute left-[80%] top-[40%] bg-amber-400 w-[70px] h-[40px] flex justify-center items-center">
                <FaEye />
              </div>
              <p className="text-sm font-Runtime">
                Find and book your next trip
              </p>
            </div>
          </div>
        </div>
        <div className="bg-red-400 col-span-2 ml-2.5 rounded-2xl">
          <DashBoardCMP />
        </div>
        <div className="bg-blue-400 row-span-2 rounded-2xl p-1">
          <DashBoard_Map />
        </div>
        <div className="bg-gray-800 rounded-2xl mr-2.5 px-1.5 py-2.5">
          <DashBoard_NearbyTrain />
        </div>
        <div className="bg-yellow-400 col-span-2 rounded-2xl ml-2.5">
          <DashBoard_CMP1 />
        </div>
        <div className="bg-red-400 rounded-2xl mr-2.5 row-span-2 px-1.5 overflow-hidden">
          <DashBoard_Updates />
        </div>
        <div className="bg-green-400 col-span-3  rounded-2xl ml-2.5 row-span-2"></div>
        <div className="bg-green-400 rounded-2xl mr-2.5 "></div>
      </div>
    </div>

    // gonna make all the components draggable and flexible. a lot more to create
  );
};

export default DashBoardLayout;
