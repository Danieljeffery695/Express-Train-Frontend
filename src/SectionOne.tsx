import React from "react";
import { BsFillBuildingsFill } from "react-icons/bs";
import { FiCheckCircle } from "react-icons/fi";
import { WiTrain } from "react-icons/wi";
import { PiHandCoinsFill } from "react-icons/pi";
import ButtonOne from "./Utils/Buttons/ButtonOne";

const SectionOne: React.FC = () => {
  return (
    <div className="w-full h-281.75  overflow-hidden">
      <header className="w-full h-95 text-center">
        <div className="w-75 h-10 mt-4 mx-auto flex items-center justify-center gap-4 rounded-4xl bg-white">
          <span>
            <PiHandCoinsFill size={"1.3rem"} />
          </span>
          <p className="text-xs font-Sekuya">Transparent Pricing</p>
        </div>
        <h1 className="text-center font-SuperSlice text-7xl py-5">
          Individual Plans
        </h1>
        <p className="text-center font-SairaStencil text-lg py-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic,
          inventore nihil. Necessitatibus tempore atque quas doloribus
          adipisci{" "}
        </p>

        <div className="SectionOne__Toggle__Div">
          <input hidden id="check" name="check" type="checkbox" />
          <label className="SectionOne__toggle__label" htmlFor="check">
            <div className="SectionOne__toggle__circle cursor-pointer" />
          </label>
          <div className="SectionOne__toggle__text font-SuperSlice">
            <span className="cursor-pointer">One Way Trip</span>
            <span className="cursor-pointer">All Round Trip</span>
          </div>
        </div>

      </header>

      <main className="size-full flex justify-center gap-6">
        <div className="w-90 h-155 bg-white rounded-lg shadow-t1">
          <div className="w-full h-20 px-5 pt-5 font-light!">
            <h3 className="text-2xl font-SairaStencil">Free</h3>
            <p className="text-lg font-mono font-medium">
              Lorem ipsum dolor sit amet cons
            </p>
          </div>

          <div className="w-full h-22 pl-5 pt-5 overflow-clip">
            <h3 className="text-3xl font-SairaStencil">$0</h3>
            <span className="text-xs font-mono font-semibold">
              Lorem ipsum dolor sit amet consectetur
            </span>
          </div>

          <div className="w-full h-22 flex items-center justify-center">
            {/* <button className="w-3/4 h-15 border-0 rounded-2xl text-white font-SairaStencil bg-gray-600">Board The Train</button> */}
            <ButtonOne width={"w-3/4"} height={"h-15"} />
          </div>

          <div className="w-full h-16.25 flex items-center justify-center gap-2 px-5">
            <hr className="text-black font-bold flex-2 border-2 border-dashed rounded-2xl" />
            <span className="flex gap-2">
              <WiTrain size={"1.4rem"} />
              <BsFillBuildingsFill size={"1rem"} />
              <WiTrain size={"1.4rem"} style={{ transform: "scaleX(-1)" }} />
            </span>
            <hr className="text-black font-bold flex-2 border-2 border-dashed rounded-2xl" />
          </div>

          <div className="size-full">
            <span className="text-[14px] font-Roboto pl-5!">
              What's is included:
            </span>
            <ul className="size-full flex flex-col gap-3 pl-5 mt-5">
              <li className="text-[16px] font-mono font-semibold flex items-center gap-3">
                <span>
                  <FiCheckCircle strokeWidth={3} size={14} />
                </span>{" "}
                Lorem, ipsum dolor.
              </li>
              <li className="text-[16px] font-mono font-semibold flex items-center gap-3">
                <span>
                  <FiCheckCircle strokeWidth={3} size={14} />
                </span>{" "}
                Lorem, ipsum.
              </li>
              <li className="text-[16px] font-mono font-semibold flex items-center gap-3">
                <span>
                  <FiCheckCircle strokeWidth={3} size={14} />
                </span>{" "}
                Lorem ipsum dolor sit, amet consectetur
              </li>
            </ul>
          </div>
        </div>

        <div className="w-90 h-155 bg-white rounded-xl shadow-t1">
          <div className="w-full h-20 px-5 pt-5 font-light!">
            <h3 className="text-2xl font-SairaStencil">Free</h3>
            <p className="text-lg font-mono font-medium">
              Lorem ipsum dolor sit amet cons
            </p>
          </div>

          <div className="w-full h-22 pl-5 pt-5 overflow-clip">
            <h3 className="text-3xl font-SairaStencil">$0</h3>
            <span className="text-xs font-mono font-semibold">
              Lorem ipsum dolor sit amet consectetur
            </span>
          </div>

          <div className="w-full h-22 flex items-center justify-center">
            {/* <button className="w-3/4 h-15 border-0 rounded-2xl text-white font-SairaStencil bg-gray-600">Board The Train</button> */}
            <ButtonOne width={"w-3/4"} height={"h-15"} />
          </div>

          <div className="w-full h-16.25 flex items-center justify-center gap-2 px-5">
            <hr className="text-black font-bold flex-2 border-2 border-dashed rounded-2xl" />
            <span className="flex gap-2">
              <WiTrain size={"1.4rem"} />
              <BsFillBuildingsFill size={"1rem"} />
              <WiTrain size={"1.4rem"} style={{ transform: "scaleX(-1)" }} />
            </span>
            <hr className="text-black font-bold flex-2 border-2 border-dashed rounded-2xl" />
          </div>

          <div className="size-full">
            <span className="text-[14px] font-Roboto pl-5">
              What's is included:
            </span>
            <ul className="size-full flex flex-col gap-3 pl-5 mt-5">
              <li className="text-[16px] font-mono font-semibold flex items-center gap-3">
                <span>
                  <FiCheckCircle strokeWidth={3} size={14} />
                </span>{" "}
                Lorem, ipsum dolor.
              </li>
              <li className="text-[16px] font-mono font-semibold flex items-center gap-3">
                <span>
                  <FiCheckCircle strokeWidth={3} size={14} />
                </span>{" "}
                Lorem, ipsum.
              </li>
              <li className="text-[16px] font-mono font-semibold flex items-center gap-3">
                <span>
                  <FiCheckCircle strokeWidth={3} size={14} />
                </span>{" "}
                Lorem ipsum dolor sit, amet consectetur
              </li>
              <li className="text-[16px] font-mono font-semibold flex items-center gap-3">
                <span>
                  <FiCheckCircle strokeWidth={3} size={14} />
                </span>{" "}
                Lorem, ipsum.
              </li>
              <li className="text-[16px] font-mono font-semibold flex items-center gap-3">
                <span>
                  <FiCheckCircle strokeWidth={3} size={14} />
                </span>{" "}
                Lorem, ipsum.
              </li>
            </ul>
          </div>
        </div>

        <div className="w-90 h-155 bg-white rounded-xl shadow-t1">
          <div className="w-full h-20 px-5 pt-5 font-light!">
            <h3 className="text-2xl font-SairaStencil">Free</h3>
            <p className="text-lg font-mono font-medium">
              Lorem ipsum dolor sit amet cons
            </p>
          </div>

          <div className="w-full h-22 pl-5 pt-5 overflow-clip">
            <h3 className="text-3xl font-SairaStencil">$0</h3>
            <span className="text-xs font-mono font-semibold">
              Lorem ipsum dolor sit amet consectetur
            </span>
          </div>

          <div className="w-full h-22 flex items-center justify-center">
            {/* <button className="w-3/4 h-15 border-0 rounded-2xl text-white font-SairaStencil bg-gray-600">Board The Train</button> */}
            <ButtonOne width={"w-3/4"} height={"h-15"} />
          </div>

          <div className="w-full h-16.25 flex items-center justify-center gap-2 px-5">
            <hr className="text-black font-bold flex-2 border-2 border-dashed rounded-2xl" />
            <span className="flex gap-2">
              <WiTrain size={"1.4rem"} />
              <BsFillBuildingsFill size={"1rem"} />
              <WiTrain size={"1.4rem"} style={{ transform: "scaleX(-1)" }} />
            </span>
            <hr className="text-black font-bold flex-2 border-2 border-dashed rounded-2xl" />
          </div>

          <div className="size-full">
            <span className="text-[14px] font-Roboto pl-5">
              What's is included:
            </span>
            <ul className="size-full flex flex-col gap-3 pl-5 mt-5">
              <li className="text-[16px] font-mono font-semibold flex items-center gap-3">
                <span>
                  <FiCheckCircle strokeWidth={3} size={14} />
                </span>{" "}
                Lorem, ipsum dolor.
              </li>
              <li className="text-[16px] font-mono font-semibold flex items-center gap-3">
                <span>
                  <FiCheckCircle strokeWidth={3} size={14} />
                </span>{" "}
                Lorem, ipsum.
              </li>
              <li className="text-[16px] font-mono font-semibold flex items-center gap-3">
                <span>
                  <FiCheckCircle strokeWidth={3} size={14} />
                </span>{" "}
                Lorem ipsum dolor sit, amet consectetur
              </li>
              <li className="text-[16px] font-mono font-semibold flex items-center gap-3">
                <span>
                  <FiCheckCircle strokeWidth={3} size={14} />
                </span>{" "}
                Lorem, ipsum.
              </li>
              <li className="text-[16px] font-mono font-semibold flex items-center gap-3">
                <span>
                  <FiCheckCircle strokeWidth={3} size={14} />
                </span>{" "}
                Lorem, ipsum.
              </li>
              <li className="text-[16px] font-mono font-semibold flex items-center gap-3">
                <span>
                  <FiCheckCircle strokeWidth={3} size={14} />
                </span>{" "}
                Lorem, ipsum.
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};


{/* <div className="card">
  <div className="content">
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20 9V5H4V9H20ZM20 11H4V19H20V11ZM3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM5 12H8V17H5V12ZM5 6H7V8H5V6ZM9 6H11V8H9V6Z" />
    </svg>
    <p className="para">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi laboriosam
      at voluptas minus culpa deserunt delectus sapiente inventore pariatur
    </p>
  </div>
</div>; */}

export default SectionOne;
