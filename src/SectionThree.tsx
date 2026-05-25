import React from "react";
import { BsFillBuildingsFill } from "react-icons/bs";
import { WiTrain } from "react-icons/wi";


const SectionThree: React.FC = () => {
    return (
      <div className="w-full h-256 bg-amber-300">
        <div className="w-full h-17.5 flex mt-5">
          <div className="flex-1 flex items-center justify-center gap-2 px-5">
            <span className="flex gap-2">
              <WiTrain size={"1.4rem"} style={{ transform: "scaleX(-1)" }} />
            </span>
            <hr className="text-black font-bold flex-2 border-2 border-dashed rounded-2xl" />
            <span className="flex gap-2">
              <WiTrain size={"1.4rem"} />
            </span>
          </div>

          <h1 className="flex-2 font-SairaStencil text-3xl text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolores
            facilis adipisci voluptatibus id officiis iste ullam sed esse unde
            expl
          </h1>

          <div className="flex-1 flex items-center justify-center gap-2 px-5">
            <span className="flex gap-2">
              <WiTrain size={"1.4rem"} style={{ transform: "scaleX(-1)" }} />
            </span>
            <hr className="text-black font-bold flex-2 border-2 border-dashed rounded-2xl" />
            <span className="flex gap-2">
              <WiTrain size={"1.4rem"} />
            </span>
          </div>
        </div>

        <div className="w-full h-225 grid grid-cols-4 gap-4 place-content-center p-7">
            <div className="col-span-2">
                <div className="h-175 ">
                    <div className="w-full h-4/5 relative">
                        <img src="testPhoto1.jpg" alt="photo" className="size-full object-cover rounded-3xl absolute z-10"/>
                        <div className="w-auto px-3 h-10 flex items-center justify-center rounded-4xl absolute right-8 bottom-12 bg-blue-400 z-20">
                            <span className="text-base font-Sekuya">nalfakfaflg</span>
                        </div>
                    </div>
                    <div className="size-full my-3">
                        <h3 className="font-Bitcount text-2xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure libero inventore eum soluta quasi animi.</h3>
                        <p className="font-Playfair text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis cumque quisquam facilis nam, qui alias iure eaque esse enim s
                            imilique, reprehenderit tempore eum nisi autem maiores perferendis, neque temporibus pariatur.</p>
                    </div>
                </div>
            </div>

            <div className="">
                 <div className="">
                    <div className="w-full h-50 relative">
                        <img src="testPhoto1.jpg" alt="photo" className="size-full object-cover rounded-3xl absolute z-10"/>
                        <div className="w-auto px-3 h-10 flex items-center justify-center rounded-4xl absolute right-3 bottom-3 bg-blue-400 z-20">
                            <span className="text-base font-Sekuya">nalfakfa</span>
                        </div>
                    </div>
                    <div className="size-full my-3">
                        <h3 className="font-Bitcount text-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
                        <p className="font-Playfair text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis cumque quisquam facilis nam, qui alias iure.</p>
                    </div>
                </div>

                 <div className="mt-5">
                    <div className="w-full h-50 relative">
                        <img src="testPhoto1.jpg" alt="photo" className="size-full object-cover rounded-3xl absolute z-10"/>
                        <div className="w-auto px-3 h-10 flex items-center justify-center rounded-4xl absolute right-3 bottom-3 bg-blue-400 z-20">
                            <span className="text-base font-Sekuya">nalfakfa</span>
                        </div>
                    </div>
                    <div className="size-full my-3">
                        <h3 className="font-Bitcount text-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
                        <p className="font-Playfair text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis cumque quisquam facilis nam, qui alias iure.</p>
                    </div>
                </div>
            </div>
            
             <div className="">
                 <div className="">
                    <div className="w-full h-50 relative">
                        <img src="testPhoto1.jpg" alt="photo" className="size-full object-cover rounded-3xl absolute z-10"/>
                        <div className="w-auto px-3 h-10 flex items-center justify-center rounded-4xl absolute right-3 bottom-3 bg-blue-400 z-20">
                            <span className="text-base font-Sekuya">nalfakfa</span>
                        </div>
                    </div>
                    <div className="size-full my-3">
                        <h3 className="font-Bitcount text-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
                        <p className="font-Playfair text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis cumque quisquam facilis nam, qui alias iure.</p>
                    </div>
                </div>

                 <div className="mt-5">
                    <div className="w-full h-50 relative">
                        <img src="testPhoto1.jpg" alt="photo" className="size-full object-cover rounded-3xl absolute z-10"/>
                        <div className="w-auto px-3 h-10 flex items-center justify-center rounded-4xl absolute right-3 bottom-3 bg-blue-400 z-20">
                            <span className="text-base font-Sekuya">nalfakfa</span>
                        </div>
                    </div>
                    <div className="size-full my-3">
                        <h3 className="font-Bitcount text-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
                        <p className="font-Playfair text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis cumque quisquam facilis nam, qui alias iure.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
}

export default SectionThree