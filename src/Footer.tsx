import React from "react";
import { WiTrain } from "react-icons/wi";


const Footer: React.FC = () => {
    return <div className="w-full h-375 pt-15 overflow-hidden">

        <p className="font-Runtime text-2xl text-center">Next Stop</p>

        <div className="w-full h-125 text-center relative my-25 pt-15">
            <div className="min-h-22.5 h-50 max-w-75 absolute top-10 left-1/4 -translate-x-1/2 -translate-y-1/2">
                <img src="train-header-right.png" alt="photo" className="size-full object-cover" />
            </div>

            <h1 className="text-center text-[170px] leading-30 font-SairaStencil opacity-40">ADAPTIVE SKILLS <br/> TRAINING</h1>

            <div className="min-h-22.5 h-50 max-w-75 absolute top-[20%] right-[15%] -translate-x-1/2 -translate-y-1/2]">
                <img src="train-header-right.png" alt="photo" className="size-full object-cover" />
            </div>

            <div className="min-h-22.5 h-50 max-w-75">
                <img src="train-header-right.png" alt="photo" className="size-full object-cover" />
            </div>
        </div>

        <div className="w-11/12 h-150 bg-white relative m-auto rounded transform-3d">
            <img src="testPhoto1.jpg" alt="photo" className="w-100 h-75 absolute left-1/4 -translate-x-1/2 -translate-y-full bg-red-400 -translate-z-0.5 object-cover" />
            <div className="w-full h-[30%] flex items-center justify-around z-3">
                <ul className="flex-1 flex justify-around pt-4 pl-10 flex-col text-base font-Runtime">
                    <li>Programs</li>
                    <li>Careers</li>
                    <li>Shops</li>
                    <li>Service Areas</li>
                </ul>

                <ul className="flex-1 flex justify-around pt-4 pl-10 flex-col text-base font-Runtime">
                    <li>Our Story</li>
                    <li>FAQ</li>
                    <li>Contacts</li>
                    <li>Donate</li>
                </ul>

                <div className="flex-2 flex gap-2 justify-end px-10">
                    <ul className="flex gap-2">
                        <li className="size-12.5 rounded-[50%] border-2 border-amber-500 flex items-center justify-center">
                            <WiTrain size={"1.4rem"} />
                        </li>

                        <li className="size-12.5 rounded-[50%] border-2 border-amber-500 flex items-center justify-center">
                            <WiTrain size={"1.4rem"} />
                        </li>

                        <li className="size-12.5 rounded-[50%] border-2 border-amber-500 flex items-center justify-center">
                            <WiTrain size={"1.4rem"} />
                        </li>
                    </ul>
                    <button className="w-35 h-13.75 rounded-4xl border-none bg-blue-500 text-xl font-Cafillen">Get Started</button>
                </div>

            </div>

            <div className="w-full h-[70%] flex items-center pt-5">
                <div className="h-[90%] w-4/5">
                    <img src="train-header-station.png" alt="photo" className="w-[90%] h-full object-cover m-auto" />
                </div>
                <ul className="w-[20%] h-50 flex justify-around self-baseline-last flex-col text-base font-Runtime text-right px-10 pb-10">
                    <li>Employee Login</li>
                    <li>Set cookie preferences</li>
                    <li>Terms & Conditions</li>
                    <li>Appeals & Complaints</li>
                </ul>
            </div>
        </div>
    </div>
}

export default Footer;