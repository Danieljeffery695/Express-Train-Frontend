import React from "react";

interface ButtonProps {
    width: string,
    height: string
};

const ButtonOne: React.FC<ButtonProps> = ({width, height}) => {
    return (
        // <!-- From Uiverse.io by Javierrocadev --> 
<button
  className={`overflow-hidden relative ${width} p-2 ${height} bg-black text-white border-none rounded-md text-xl font-SairaStencil cursor-pointer relative z-10 group`}
>
  Board me!
  <span
    className={`absolute w-[110%] h-32 -top-8 -left-2 bg-white rotate-5 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left`}
  ></span>
  <span
    className={`absolute w-[110%] h-32 -top-8 -left-2 bg-purple-400 rotate-5 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left`}
  ></span>
  <span
    className={`absolute w-[110%] h-32 -top-8 -left-2 bg-purple-600 rotate-5 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left`}
  ></span>
  <span
    className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
    >Here we go!!</span>
</button>

    )
}

export default ButtonOne;