import React from "react";

const SectionFour: React.FC = () => {
    return <div className="w-full h-350 bg-amber-400">
        <div className="w-full h-1/2 flex px-5">
            <div className="flex-1 p-5">
                <h1 className="text-9xl font-Cafillen my-11">El <br/> Cuerpo</h1>
                <h4 className="text-4xl font-mono font-bold my-8">Tratameinos</h4>
                <p className="text-gray-500 text-2xl font-Runtime">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi incidunt hic ducimus, aliquam ex
                     possimus quidem sint! Error assumenda vitae, nam doloremque explicabo maiores, odio minus, quia repellat quis atque.</p>
                {/* Button place here */}
            </div>

            <div className="flex-1 py-8">
                <div className="min-w-11/12 min-h-11/12 m-auto">
                {/* Video location */}
                </div>
            </div>

            <div className="flex-initial w-12.5 relative">
                {/* Progress bar location */}

                <ul className="w-12.5 h-full flex flex-col items-center justify-between before:w-7.5 before:h-full before:border-l-2 before:border-l-white
                 before:content-[''] before:absolute before:left-2/4">
                    <li className="z-3 size-6.25 rounded-[50%] border-2 border-gray-500 flex items-center justify-center mt-10"></li>
                    <li className="z-3 size-6.25 rounded-[50%] border-2 border-gray-500 flex items-center justify-center"></li>
                    <li className="z-3 size-6.25 rounded-[50%] border-2 border-gray-500 flex items-center justify-center"></li>
                    <li className="z-3 size-8.75 rounded-[50%] border-2 border-gray-500 flex items-center justify-center text-white text-base">&#10042;</li>
                </ul>
            </div>
        </div>

        <div className="w-full h-1/2 flex px-5">
            <div className="flex flex-col items-center justify-center gap-5 flex-1">
                <h1 className="text-8xl font-Cafillen font-extralight! text-center">Lorem ipsum dolor sit, amet ad ex akei?</h1>
                <p className="text-2xl font-Runtime font-bold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, aperiam!!!</p>
                <button className="w-50 h-50 rounded-[50%] border-2 border-white text-2xl flex items-center justify-center font-Sekuya">Reserva</button>
            </div>
             <div className="flex-initial w-12.5 relative">
                {/* Progress bar location */}

                <ul className="w-12.5 h-full flex flex-col items-center justify-between before:w-7.5 before:h-full before:border-l-2 before:border-l-white
                 before:content-[''] before:absolute before:left-2/4">
                    <li className="z-3 size-6.25 rounded-[50%] border-2 border-gray-500 flex items-center justify-center mt-10"></li>
                    <li className="z-3 size-6.25 rounded-[50%] border-2 border-gray-500 flex items-center justify-center"></li>
                    <li className="z-3 size-8.75 rounded-[50%] border-2 border-gray-500 flex items-center justify-center text-white text-base mb-3">&diams;</li>
                </ul>
            </div>
        </div>
    </div>
}

export default SectionFour;