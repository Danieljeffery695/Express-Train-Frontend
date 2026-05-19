import React from "react";
import { useSwiper, useSwiperSlide } from "swiper/react";
import { IoTrainSharp } from "react-icons/io5";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from "react-icons/io";


const SlideContents: React.FC = () => {
    const slidersElement = useSwiper();
    const swiperSlidersElement = useSwiperSlide();
    return (
         <div className={`w-175 h-112.5 relative ${swiperSlidersElement.isActive ? "" : "backdrop-blur-2xl backdrop-opacity-10"}`}>
            <img src="testPhoto1.jpg" alt="BgPics" className="size-full object-cover absolute -z-5"/>
            <div className="w-80 h-25 flex gap-3 bg-amber-600 justify-center items-center">
                <span><IoTrainSharp size={"1.5rem"}/></span>
                <p className="text-lg text-white font-Playfair">Add to Favorite</p>
            </div>
            <div className="size-full flex px-10 items-center justify-between">
              <div className="flex-1 pl-5 flex flex-col justify-end bg-white">
                <div className="flex w-full bg-red-500 h-10 gap-3">
                  <div className="size-7.5 rounded-[50%]">
                    {/* <img src="" alt="countryFlagPic" /> */}
                    🎱
                  </div>
                  <p className="text-lg font-Playfair font-extralight wrap-anywhere">Bodrum, Turkey</p>
                </div>
                <div className="flex flex-col gap-5">
                  <h2 className="text-3xl font-SuperSlice">Oguz Khan</h2>
                  <ul className="text-lg font-serif font-light flex gap-8">
                    <li className="list-disc">51 Meters</li>
                    <li className="list-disc">6 Cabins</li>
                    <li className="list-disc">10 Crew</li>
                  </ul>
                </div>
              </div>

              <div className="flex-1 pr-5 flex gap-5 items-end justify-end bg-white">
                <h2 className="text-2xl font-SuperSlice leading-12">$155/<sub className="text-sm font-Playfair font-bold leading-12">One Way</sub></h2>
                <span className="size-8.75 rounded-[50%] border border-black flex justify-center items-center my-2"><BsFillInfoCircleFill size={"1.5rem"} color="white"/></span>
              </div>
            </div>

            {/* <span className={`size-[60px] rounded-[50%] bg-white absolute -left-7 top-1/2 z-10 flex justify-center items-center 
              ${swiperSlidersElement.isActive ? "" : "hidden"}`}>
              <IoMdArrowRoundBack size={"1.4rem"}/>
            </span> */}

            <span className="size-[60px] rounded-[50%] bg-white absolute -right-7 top-1/2 z-10 flex justify-center items-center">
              <IoMdArrowRoundForward size={"1.4rem"}/>
            </span>
          </div>
    )
}

export default SlideContents;