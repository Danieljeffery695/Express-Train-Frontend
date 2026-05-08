import React from "react";
import { BsFillBuildingsFill } from "react-icons/bs";
import { TbTrainFilled } from "react-icons/tb";
import { FiCheckCircle } from "react-icons/fi";
import { WiTrain } from "react-icons/wi";

const SectionOne: React.FC = () => {
    return (
        <div className="w-full h-256 bg-red-400 overflow-hidden">
            <header className="w-full h-75 text-center">
                <div>
                    <span>Icon</span>
                    <p>Transparent Pricing</p>
                </div>
                <h1>Individual Plans</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, inventore nihil. Necessitatibus tempore atque quas doloribus adipisci </p>
                <div>
                    <button>One Way Trip</button>
                    <button>All Round Trip</button>
                </div>
            </header>
            <main className="size-full flex justify-center gap-6">
                <div className="w-90 h-155 bg-white rounded-lg shadow-t1">
                    <div className="w-full h-20 px-5! pt-5! font-light!">
                        <h3 className="text-2xl font-SairaStencil">Free</h3>
                        <p className="text-lg font-mono font-medium">Lorem ipsum dolor sit amet cons</p>
                    </div>
                    
                    <div className="w-full h-22 pl-5! pt-5! overflow-clip">
                        <h3 className="text-3xl font-SairaStencil">$0</h3>
                        <span className="text-xs font-mono font-semibold">Lorem ipsum dolor sit amet consectetur</span>
                    </div>

                    <div className="w-full h-22 flex items-center justify-center">
                        <button className="w-3/4 h-15 border-0 rounded-2xl text-white font-SairaStencil bg-gray-600">Board The Train</button>
                    </div>

                    <div className="w-full h-16.25 flex items-center justify-center gap-2 px-5!">
                        <hr className="text-black font-bold flex-2 border rounded-2xl"/>
                            <span className="flex gap-2">
                                    <WiTrain size={"1.4rem"}/>
                                    <BsFillBuildingsFill size={"1rem"}/>
                                    <WiTrain size={"1.4rem"} style={{ transform: "scaleX(-1)"}}/>
                            </span>
                        <hr className="text-black font-bold flex-2 border rounded-2xl"/>
                    </div>

                    <div className="size-full">
                        <span className="text-[14px] font-Roboto pl-5!">What's is included:</span>
                        <ul className="size-full flex flex-col gap-3 pl-5! mt-5!">
                            <li className="text-[16px] font-mono font-semibold flex items-center gap-3"><span><FiCheckCircle strokeWidth={3} size={14}/></span> Lorem, ipsum dolor.</li>
                            <li className="text-[16px] font-mono font-semibold flex items-center gap-3"><span><FiCheckCircle strokeWidth={3} size={14}/></span> Lorem, ipsum.</li>
                            <li className="text-[16px] font-mono font-semibold flex items-center gap-3"><span><FiCheckCircle strokeWidth={3} size={14}/></span> Lorem ipsum dolor sit, amet consectetur</li>
                        </ul>
                    </div>

                </div>


                <div className="w-90 h-155 bg-white rounded-xl shadow-t1">
                    <div className="w-full h-20 px-5! pt-5! font-light!">
                        <h3 className="text-2xl font-SairaStencil">Free</h3>
                        <p className="text-lg font-mono font-medium">Lorem ipsum dolor sit amet cons</p>
                    </div>
                    
                    <div className="w-full h-22 pl-5! pt-5! overflow-clip">
                        <h3 className="text-3xl font-SairaStencil">$0</h3>
                        <span className="text-xs font-mono font-semibold">Lorem ipsum dolor sit amet consectetur</span>
                    </div>

                    <div className="w-full h-22 flex items-center justify-center">
                        <button className="w-3/4 h-15 border-0 rounded-2xl text-white font-SairaStencil bg-gray-600">Board The Train</button>
                    </div>

                    <div className="w-full h-16.25 flex items-center justify-center gap-2 px-5!">
                        <hr className="text-black font-bold flex-2 border rounded-2xl"/>
                            <span className="flex gap-2">
                                    <WiTrain size={"1.4rem"}/>
                                    <BsFillBuildingsFill size={"1rem"}/>
                                    <WiTrain size={"1.4rem"} style={{ transform: "scaleX(-1)"}}/>
                            </span>
                        <hr className="text-black font-bold flex-2 border rounded-2xl"/>
                    </div>

                    <div className="size-full">
                        <span className="text-[14px] font-Roboto pl-5!">What's is included:</span>
                        <ul className="size-full flex flex-col gap-3 pl-5! mt-5!">
                            <li className="text-[16px] font-mono font-semibold flex items-center gap-3"><span><FiCheckCircle strokeWidth={3} size={14}/></span> Lorem, ipsum dolor.</li>
                            <li className="text-[16px] font-mono font-semibold flex items-center gap-3"><span><FiCheckCircle strokeWidth={3} size={14}/></span> Lorem, ipsum.</li>
                            <li className="text-[16px] font-mono font-semibold flex items-center gap-3"><span><FiCheckCircle strokeWidth={3} size={14}/></span> Lorem ipsum dolor sit, amet consectetur</li>
                            <li className="text-[16px] font-mono font-semibold flex items-center gap-3"><span><FiCheckCircle strokeWidth={3} size={14}/></span> Lorem, ipsum.</li>
                            <li className="text-[16px] font-mono font-semibold flex items-center gap-3"><span><FiCheckCircle strokeWidth={3} size={14}/></span> Lorem, ipsum.</li>

                        </ul>
                    </div>


                </div>


                <div className="w-90 h-155 bg-white rounded-xl shadow-t1">
                    <div className="w-full h-20 px-5! pt-5! font-light!">
                        <h3 className="text-2xl font-SairaStencil">Free</h3>
                        <p className="text-lg font-mono font-medium">Lorem ipsum dolor sit amet cons</p>
                    </div>
                    
                    <div className="w-full h-22 pl-5! pt-5! overflow-clip">
                        <h3 className="text-3xl font-SairaStencil">$0</h3>
                        <span className="text-xs font-mono font-semibold">Lorem ipsum dolor sit amet consectetur</span>
                    </div>

                    <div className="w-full h-22 flex items-center justify-center">
                        <button className="w-3/4 h-15 border-0 rounded-2xl text-white font-SairaStencil bg-gray-600">Board The Train</button>
                    </div>

                    <div className="w-full h-16.25 flex items-center justify-center gap-2 px-5!">
                        <hr className="text-black font-bold flex-2 border rounded-2xl"/>
                          <span className="flex gap-2">
                                    <WiTrain size={"1.4rem"}/>
                                    <BsFillBuildingsFill size={"1rem"}/>
                                    <WiTrain size={"1.4rem"} style={{ transform: "scaleX(-1)"}}/>
                            </span>
                        <hr className="text-black font-bold flex-2 border rounded-2xl"/>
                    </div>

                     <div className="size-full">
                        <span className="text-[14px] font-Roboto pl-5!">What's is included:</span>
                        <ul className="size-full flex flex-col gap-3 pl-5! mt-5!">
                            <li className="text-[16px] font-mono font-semibold flex items-center gap-3"><span><FiCheckCircle strokeWidth={3} size={14}/></span> Lorem, ipsum dolor.</li>
                            <li className="text-[16px] font-mono font-semibold flex items-center gap-3"><span><FiCheckCircle strokeWidth={3} size={14}/></span> Lorem, ipsum.</li>
                            <li className="text-[16px] font-mono font-semibold flex items-center gap-3"><span><FiCheckCircle strokeWidth={3} size={14}/></span> Lorem ipsum dolor sit, amet consectetur</li>
                            <li className="text-[16px] font-mono font-semibold flex items-center gap-3"><span><FiCheckCircle strokeWidth={3} size={14}/></span> Lorem, ipsum.</li>
                            <li className="text-[16px] font-mono font-semibold flex items-center gap-3"><span><FiCheckCircle strokeWidth={3} size={14}/></span> Lorem, ipsum.</li>
                            <li className="text-[16px] font-mono font-semibold flex items-center gap-3"><span><FiCheckCircle strokeWidth={3} size={14}/></span> Lorem, ipsum.</li>
                        </ul>
                    </div>


                </div>


            </main>
        </div>
    )
}

export default SectionOne;