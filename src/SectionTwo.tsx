// I am thinking of using a video background with some included scrollTrigger behaviors.
// I will create a slider of photo. when user scroll the slide should move to the next one and the video play the next chapter
// The video will illustrate some key city's and vacations site around the selected slide location

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SlideContents from "./Components/SlideElements";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow,  Pagination } from 'swiper/modules';


const SectionTwo: React.FC = () => {
  
    return (
      <div className="w-full h-256 bg-red-400 p-3">
        <div className="size-full bg-blue-400 m-auto relative flex flex-col justify-end">
          <video
            disablePictureInPicture
            autoPlay
            loop
            muted
            className="object-cover w-full h-full bg-white absolute top-0 left-0 -z-10"
          >
            {/* <source src="testVideo.mp4"/> */}
            {/* Incased first video format fail. the next source element will back it up since the browser will continue it search for another source element */}
            {/* <source src="/public/testVideo.webm" /> */}
          </video>
          <h1 className="text-end font-SuperSlice text-7xl pr-2">China</h1>
          <div className="w-full bg-red-400 ">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              centeredSlidesBounds={true}
              initialSlide={4}
              slidesPerView={2}
              coverflowEffect={{
                rotate: 5,
                stretch: -25,
                depth: 250,
                modifier: 1,
                slideShadows: false,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              {Array.from({ length: 10 }).map((ele, index) => (
                <SwiperSlide> <SlideContents/> </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    );
}

export default SectionTwo;