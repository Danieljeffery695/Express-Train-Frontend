import React from "react";
import { FaEye } from "react-icons/fa";

const DashBoardLayout: React.FC = () => {
  return (
    <div className="w-full h-screen flex">
      <div className="w-[20%] h-screen fixed">
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

      <div className="flex-2 grid grid-cols-4 ml-[20%]">
        <div className="bg-white col-span-full h-[300px]">
          <div className="w-full h-[100px] bg-black"></div>
          <div className="w-[400px] h-[80px] ml-2.5">
            <h1 className="text-2xl font-Playfair">Good morning, Daniel 👋 </h1>
            <p className="text-sm font-Runtime">
              Your next journey is just a few clicks away.
            </p>
          </div>
          <div className="w-full h-[150px] flex">
            <div className="w-[300px] h-[80px] bg-red-500 rounded-lg">
              <FaEye />
              <h2>Book a Train</h2>
              <div className="float-left w-[70px] h-[40px] flex justify-center">
                <FaEye />
              </div>
              <span>Find and book your next trip</span>
            </div>
            <div className="w-[300px] h-[80px] bg-red-500 rounded-lg">
              <FaEye />
              <h2>Book a Train</h2>
              <div className="float-left w-[70px] h-[40px] flex justify-center">
                <FaEye />
              </div>
              <span>Find and book your next trip</span>
            </div>
            <div className="w-[300px] h-[80px] bg-red-500 rounded-lg">
              <FaEye />
              <h2>Book a Train</h2>
              <div className="float-left w-[70px] h-[40px] flex justify-center">
                <FaEye />
              </div>
              <span>Find and book your next trip</span>
            </div>
            <div className="w-[300px] h-[80px] bg-red-500 rounded-lg">
              <FaEye />
              <h2>Book a Train</h2>
              <div className="float-left w-[70px] h-[40px] flex justify-center">
                <FaEye />
              </div>
              <span>Find and book your next trip</span>
            </div>
          </div>
        </div>

        <div className="bg-red-400 col-span-2 h-[300px]"></div>

        <div className="bg-blue-400 row-span-2"></div>

        <div className="bg-white"></div>

        <div className="bg-yellow-400 col-span-2 h-[140px]"></div>

        <div className="bg-white"></div>

        <div className="bg-green-400 col-span-3 h-[200px]"></div>

        {/* <div className="bg-white"></div> */}
      </div>
    </div>

    // gonna make all the components draggable and flexible. a lot more to create
  );
};

export default DashBoardLayout;
