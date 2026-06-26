import React from "react";

const SignUp: React.FC = () => {
    return (
        <div className="w-full h-250 pt-10 bg-darkMode-border-color">
            <div className="w-[90%] h-225 flex m-auto bg-amber-500 rounded-4xl">

                <div className="flex-1">
                    <div className="w-full h-20 p-5">
                        <button className="w-30 h-15 rounded-4xl text-center bg-blue-400">Home</button>
                    </div>
                    <div className="w-full h-37.5 flex flex-col items-center justify-center gap-4">
                        <img src="testPhoto1.jpg" alt="LogoPic" className="w-50 h-17.5 object-contain object-center"/>
                        <h2 className="text-2xl font-SuperSlice">Sign UP</h2>
                        <p className="text-sm font-Runtime">See what is happening around the globe</p>
                    </div>

                    <form action="" className="w-full h-100 flex flex-col items-center justify-center gap-3">

                        <div className="w-125 min-w-75 h-17.5 flex flex-col">
                            <label htmlFor="name" className="text-xl font-SairaStencil font-extralight text-gray-600">Name</label>
                            <input type="text" className=" w-full h-10 border-b-2 border-b-gray-500 outline-0 focus:border-2 focus:rounded-4xl 
                            focus:border-gray-500 text-xs font-Sekuya md:pl-5 md:pr-10 bg-[url(staff.png)] bg-no-repeat bg-size-[25px] bg-position-[98%] bg-clip-padding"
                             autoComplete="off" placeholder="Mr/Mrs" id="name"/>
                        </div>

                        <div className="w-125 min-w-75 h-17.5 flex flex-col">
                            <label htmlFor="email" className="text-xl font-SairaStencil font-extralight text-gray-600">Email</label>
                            <input type="email" className=" w-full h-10 border-b-2 border-b-gray-500 outline-0 focus:border-2 focus:rounded-4xl 
                            focus:border-gray-500 text-xs font-Sekuya md:pl-5 md:pr-10 bg-[url(staff.png)] bg-no-repeat bg-size-[25px] bg-position-[98%] bg-clip-padding"
                             autoComplete="off" placeholder="Mr/Mrs Emails" id="email"/>
                        </div>

                        <div className="w-125 min-w-75 h-17.5 flex flex-col">
                            <label htmlFor="number" className="text-xl font-SairaStencil font-extralight text-gray-600">Phone Number</label>
                            <input type="number" className=" w-full h-10 border-b-2 border-b-gray-500 outline-0 focus:border-2 focus:rounded-4xl 
                            focus:border-gray-500 text-xs font-Sekuya md:pl-5 md:pr-10 bg-[url(staff.png)] bg-no-repeat bg-size-[25px] bg-position-[98%] bg-clip-padding"
                             autoComplete="off" placeholder="Mr/Mrs Phone Number" id="number"/>
                        </div>

                        <div className="w-125 min-w-75 h-17.5 flex flex-col">
                            <label htmlFor="password" className="text-xl font-SairaStencil font-extralight text-gray-600">Password</label>
                            <input type="password" className=" w-full h-10 border-b-2 border-b-gray-500 outline-0 focus:border-2 focus:rounded-4xl 
                            focus:border-gray-500 text-xs font-Sekuya md:pl-5 md:pr-10 bg-[url(staff.png)] bg-no-repeat bg-size-[25px] bg-position-[98%] bg-clip-padding"
                             autoComplete="off" placeholder="Mr/Mrs Password" id="password"/>
                        </div>

                         <div className="w-125 min-w-75 h-20! flex flex-col">
                            <input type="submit" value="Sign UP" className=" w-full h-15 border-b-2 border-b-gray-500 outline-0 hover:border-2 hover:rounded-4xl 
                            hover:border-gray-500 text-sm font-Sekuya"
                            />
                        </div>

                    </form>

                    <div className="w-full h-62.5 grid grid-cols-2 justify-items-center">

                         <div className="w-50 h-15">
                            <button className=" w-full h-12.25 border-b-2 border-b-gray-500 outline-0 hover:border-2 hover:rounded-4xl 
                            hover:border-gray-500 text-sm font-Sekuya"
                            >Test</button>
                        </div>

                        <div className="w-50 h-15">
                            <button className=" w-full h-12.25 border-b-2 border-b-gray-500 outline-0 hover:border-2 hover:rounded-4xl 
                            hover:border-gray-500 text-sm font-Sekuya"
                            >Test</button>
                        </div> 

                         <div className="w-[80%] h-15 col-span-2">
                            <button className=" w-full h-12.25 border-b-2 border-b-gray-500 outline-0 hover:border-2 hover:rounded-4xl 
                            hover:border-gray-500 text-sm font-Sekuya"
                            >Test</button>
                        </div>

                        <div className="w-[80%] h-15 col-span-2">
                            <button className=" w-full h-12.25 border-b-2 border-b-gray-500 outline-0 hover:border-2 hover:rounded-4xl 
                            hover:border-gray-500 text-sm font-Sekuya"
                            >Test</button>
                        </div> 
                    </div>

                </div>

                <div className="flex-1 bg-[url(testPhoto1.jpg)] grid grid-cols-2 bg-fixed bg-cover bg-no-repeat rounded-4xl">
                    <div className="w-12.5 h-45 bg-red-50 flex items-center justify-center row-span-2">
                        <button className="w-11.25 h-35 rounded-3xl text-center bg-blue-400">Home</button>
                    </div>

                    <div className="w-25 h-25 bg-red-400 ml-auto flex items-center justify-center">
                        <span className="size-15 rounded-[50%] flex items-center justify-center bg-white">X</span>    
                    </div>

                    <div className="w-[16px] break-all bg-red-50 ml-auto ">
                        <a href="">TERMS & CONDITIONS</a>
                        {/* I will get some generated pics of a train harboring the words Terms & Conditions and align it horizontally */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;