import React from "react";

const SectionFive: React.FC = () => {
    return (
        <div className="w-full h-[1100px] grid grid-cols-4 gap-3 grid-rows-[1fr_2fr_1fr] overflow-hidden pt-3">
            <div className="col-span-2 ml-2">
                <img src="testPhoto1.jpg" alt="photo" className="object-center object-cover rounded-2xl size-full" />
            </div>

            <div className="col-span-2 mr-2">
                <img src="testPhoto1.jpg" alt="photo" className="object-center object-cover rounded-2xl size-full" />
            </div>

            <div className="col-span-1">
                <img src="testPhoto1.jpg" alt="photo" className="object-center object-cover rounded-tr-2xl rounded-br-2xl size-full" />
            </div>

            <div className="col-span-2">
                <img src="testPhoto1.jpg" alt="photo" className="object-center object-cover rounded-2xl size-full" />
            </div>

            <div className="col-span-1">
                <img src="testPhoto1.jpg" alt="photo" className="object-center object-cover rounded-tl-2xl rounded-bl-2xl size-full" />
            </div>

            <div className="col-span-2">
                <img src="testPhoto1.jpg" alt="photo" className="object-center object-cover rounded-tr-2xl size-full" />
            </div>

            <div className="col-span-2">
                <img src="testPhoto1.jpg" alt="photo" className="object-center object-cover rounded-tl-2xl size-full" />
            </div>

        </div>
    )
}


export default SectionFive;