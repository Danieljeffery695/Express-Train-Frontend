// I am thinking of using a video background with some included scrollTrigger behaviors.
// I will create a slider of photo. when user scroll the slide should move to the next one and the video play the next chapter
// The video will illustrate some key city's and vacations site around the selected slide location

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SlideContents from "../Components/SlideElements";
import ButtonOne from "../Utils/Buttons/ButtonOne";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow } from 'swiper/modules';


const SectionTwo: React.FC = () => {
  
    return (
      <div className="w-full h-425 overflow-hidden">
        <div className="w-full h-275 m-auto relative pb-18 flex flex-col justify-end">
          {/* <video
            disablePictureInPicture
            autoPlay
            muted
            className="size-full bg-white object-cover absolute z-5 opacity-50"
          >
            <source src="testVideo.mp4"/>
            Incased first video format fail. the next source element will back it up since the browser will continue it search for another source element
            <source src="/public/testVideo.webm" />
          </video> */}
          <h1 className="text-end font-SuperSlice text-7xl pr-2 z-10 text-amber-300">China</h1>
          <div className="z-10">
            <Swiper
              effect={"coverflow"}
              centeredSlides={true}
              initialSlide={4}
              slidesPerView={2}
              watchSlidesProgress={true}
              speed={600}
              touchRatio={1.2}
              lazyPreloadPrevNext={1}
              lazyPreloaderClass="swiper-lazy-preloader"
              coverflowEffect={{
                rotate: 5,
                stretch: -25,
                depth: 50,
                modifier: 1,
                slideShadows: false,
              }}
              pagination={true}
              modules={[EffectCoverflow]}
              className="mySwiper"
            >
              {Array.from({ length: 10 }).map(() => (
                <SwiperSlide> <SlideContents/> </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="w-full h-1 bg-gray-400">
          <div className="w-1/3 h-full bg-gray-600"></div>
        </div>
        
        <div className="w-full h-155 flex items-center">
          <div className="flex-1 text-white pl-10">
            <div><img src="" alt="" /></div>
            <h3 className="text-4xl font-SuperSlice my-4">Explore Destinations</h3>
            <p className="text-[15px] font-Playfair font-light my-4">Discover the most beautiful destinations <br/> in the Mediterranean</p>
            {/* <button className="w-[280px] h-[70px] text-center font-Playfair font-bold border-0 rounded-2xl bg-amber-400 my-6">Discover Mediterranean</button> */}
            <ButtonOne width={"w-70"} height={"h-17.5"} firstText="Discover Mediterranean" secondText="Travel with us"/>
          </div>

          <div className="flex-2 flex gap-5 justify-center">

            <div className="w-62.5 h-90 relative text-white rounded-2xl">
              <img src="testPhoto1.jpg" alt="photo" className="size-full absolute bg-black mix-blend-overlay rounded-2xl object-cover"/>

              <div className="w-full h-37.5 relative top-3/4 p-3">
                <h3 className="text-xl font-Sekuya">China</h3>
                <span className="text-xs font-Playfair">Included 82 train </span>
              </div>
              
            </div>


            <div className="w-62.5 h-90 relative text-white rounded-2xl">

              <img src="testPhoto1.jpg" alt="photo" className="size-full absolute bg-black mix-blend-overlay rounded-2xl object-cover"/>

              <div className="w-full h-37.5 relative top-3/4 p-3">
                <h3 className="text-xl font-Sekuya">China</h3>
                <span className="text-xs font-Playfair">Included 82 train </span>
              </div>
              
            </div>

            <div className="w-62.5 h-90 relative text-white rounded-2xl">

              <img src="testPhoto1.jpg" alt="photo" className="size-full absolute bg-black mix-blend-overlay rounded-2xl object-cover"/>

              <div className="w-full h-37.5 relative top-3/4 p-3">
                <h3 className="text-xl font-Sekuya">China</h3>
                <span className="text-xs font-Playfair">Included 82 train </span>
              </div>
              
            </div>
          </div>


        </div>
      </div>
    );
}

export default SectionTwo;