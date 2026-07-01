import React from "react";
import "./pages.css";

const SignUp: React.FC = () => {
    return (
        <div className="w-full h-1325 pt-10 bg-darkMode-border-color">
            <div className="w-[90%] h-300 flex m-auto rounded-4xl overflow-hidden relative bg-[url(testPhoto1.jpg)] bg-fixed bg-cover bg-no-repeat test-test">

                <svg className="absolute top-0 left-[40%] flex-initial h-[101%]" viewBox="0 0 400 800" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://w3.org">
                    <defs>
                        <path id="track-curve" d="M 200, 0 C 100, 66 100, 133 200, 200 C 300, 266 300, 333 200, 400 C 100, 466 100, 533 200, 600 C 300, 666 300, 733 200, 850" />
                    </defs>
                    <use href="#track-curve" stroke="#ffff" stroke-width="30" stroke-dasharray="3, 8"/>
                    <use href="#track-curve" stroke="#transparent" stroke-width="28" />
                    <use href="#track-curve" x="-12" stroke="black" stroke-width="4" stroke-dasharray="12, 8" strokeLinecap="round"/>
                    <use href="#track-curve" x="12" stroke="black" stroke-width="4" stroke-dasharray="12, 8" strokeLinecap="round"/>
                </svg>

                <div className="flex-1 z-10">
                    <div className="w-full h-20 p-5 ">
                        <button className="w-30 h-15 rounded-4xl text-center bg-blue-400">Home</button>
                    </div>
                    <div className="w-full h-37.5 flex flex-col items-center justify-center gap-4">
                        <img src="testPhoto1.jpg" alt="LogoPic" className="w-50 h-17.5 object-contain object-center"/>
                        <h2 className="text-2xl font-SuperSlice">Sign UP</h2>
                        <p className="text-sm font-Runtime">See what is happening around the globe</p>
                    </div>

                    <form action="" className="w-full h-100 flex flex-col items-center justify-center gap-3">

                        <div className="w-125 min-w-75 h-17.5 inputbox after:border-b-2 after:border-b-red-500">

                            <input required type="text" className="text-xs text-white font-Sekuya bg-[url(staff.png)] bg-no-repeat bg-size-[25px] bg-position-[98%]"
                            autoComplete="off" placeholder="Mr/Mrs" id="name"/>
                            <label htmlFor="name" className="input-label text-xl font-SairaStencil font-extralight text-gray-600">Enter text</label>
                             <i></i>

                        </div>

                        <div className="w-125 min-w-75 h-17.5 inputbox">
                            
                            <input required type="email" className="text-xs text-white font-Sekuya bg-[url(staff.png)] bg-no-repeat bg-size-[25px] bg-position-[98%]"
                            autoComplete="off" placeholder="Mr/Mrs Email" id="email"/>
                            <label htmlFor="email" className="input-label text-xl font-SairaStencil font-extralight text-gray-600">Email</label>
                             <i></i>

                        </div>

                        <div className="w-125 min-w-75 h-17.5 inputbox">
                           
                            <input required type="number" className="text-xs text-white font-Sekuya bg-[url(staff.png)] bg-no-repeat bg-size-[25px] bg-position-[98%]"
                            autoComplete="off" placeholder="Mr/Mrs Phone Number" id="number"/>
                            <label htmlFor="name" className="input-label text-xl font-SairaStencil font-extralight text-gray-600">Phone Number</label>
                             <i></i>

                        </div>

                        <div className="w-125 min-w-75 h-17.5 inputbox">
                            
                            <input required type="password" className="text-xs text-white font-Sekuya bg-[url(staff.png)] bg-no-repeat bg-size-[25px] bg-position-[98%]"
                            autoComplete="off" placeholder="Mr/Mrs Magic Words" id="password"/>
                            <label htmlFor="name" className="input-label text-xl font-SairaStencil font-extralight text-gray-600">Password</label>
                             <i></i>

                        </div>

                         <div className="w-125 min-w-75 h-20! flex flex-col">
                            <input type="submit" value="Sign UP" className="w-full h-15 border-b-2 border-b-gray-500 border-transparent outline-0 hover:border-2 hover:rounded-4xl 
                            hover:border-gray-500 text-sm font-Sekuya transition-all transition-discrete delay-150 duration-200 ease-in-out cursor-pointer"
                            />
                        </div>

                    </form>

                    <div className="w-full h-62.5 grid grid-cols-2 justify-items-center">

                         <div className="w-50 h-15">
                            <button className=" w-full h-12.25 border-b-2 border-transparent border-b-gray-500 outline-0 hover:border-2 hover:rounded-4xl 
                            hover:border-gray-500 text-sm font-Sekuya transition-all transition-discrete delay-150 duration-200 ease-in-out cursor-pointer"
                            >Test</button>
                        </div>

                        <div className="w-50 h-15">
                            <button className=" w-full h-12.25 border-b-2 border-transparent border-b-gray-500 outline-0 hover:border-2 hover:rounded-4xl 
                            hover:border-gray-500 text-sm font-Sekuya transition-all transition-discrete delay-150 duration-200 ease-in-out cursor-pointer"
                            >Test</button>
                        </div> 

                         <div className="w-[80%] h-15 col-span-2">
                            <button className=" w-full h-12.25 border-b-2 border-transparent border-b-gray-500 outline-0 hover:border-2 hover:rounded-4xl 
                            hover:border-gray-500 text-sm font-Sekuya transition-all transition-discrete delay-150 duration-200 ease-in-out cursor-pointer"
                            >Test</button>
                        </div>

                        <div className="w-[80%] h-15 col-span-2">
                            <button className=" w-full h-12.25 border-b-2 border-transparent border-b-gray-500 outline-0 hover:border-2 hover:rounded-4xl 
                            hover:border-gray-500 text-sm font-Sekuya transition-all transition-discrete delay-150 duration-200 ease-in-out cursor-pointer"
                            >Test</button>
                        </div> 
                    </div>

                </div>

                <div className="w-17.5"></div>

                <div className="flex-1  grid grid-cols-2 rounded-4xl">
                    <div className="w-12.5 h-45 bg-red-50 flex items-center justify-center row-span-2">
                        <button className="w-11.25 h-35 rounded-3xl text-center bg-blue-400">Home</button>
                    </div>

                    <div className="w-25 h-25 bg-red-400 ml-auto flex items-center justify-center">
                        <span className="size-15 rounded-[50%] flex items-center justify-center bg-white">X</span>    
                    </div>

                    <div className="w-4 break-all bg-red-50 ml-auto ">
                        <a href="">TERMS & CONDITIONS</a>
                        {/* I will get some generated pics of a train harboring the words Terms & Conditions and align it horizontally */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;