// I am thinking of using a video background with some included scrollTrigger behaviors.
// I will create a slider of photo. when user scroll the slide should move to the next one and the video play the next chapter
// The video will illustrate some key city's and vacations site around the selected slide location

import React from "react";

const SectionTwo: React.FC = () => {
    return (
        <div className="w-full h-200 bg-red-400 p-3">
            <div className="size-full bg-blue-400 m-auto relative flex flex-col justify-end">
                <video disablePictureInPicture autoPlay loop muted className="object-cover w-full h-full bg-white absolute top-0 left-0 -z-10">
                    {/* <source src="testVideo.mp4"/> */}
                    {/* Incased first video format fail. the next source element will back it up since the browser will continue it search for another source element */}
                    {/* <source src="/public/testVideo.webm" /> */}
                </video>
                <h1 className="text-end font-SuperSlice text-7xl pr-2">China</h1>
                <div className="w-full h-125 bg-red-400">
                    <div>Slider1</div>
                    <div>Slider2</div>
                    <div>Slider3</div>
                    <div>Slider4</div>
                    <div>Slider5</div>
                    <div>Slider6</div>
                    <div>Slider7</div>
                    <div>Slider8</div>
                    <div>Slide9</div>
                    <div>Slider10</div>
                </div>
            </div>
        </div>
    )
}

export default SectionTwo;