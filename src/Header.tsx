import React from "react";
import HeaderForm from "./Components/HeaderForm";

const Header: React.FC = () => {
    return (
        <div className="w-full h-200 flex">
            <div className="flex-2 shadow-lg/30 shadow-darkMode-primary">
                {/* Hold canvas for three.js 3d models */}
            </div>
            <div className="flex-1 relative flex items-center">
                {/* Form stay here */}
                <div className="absolute -translate-x-1/2  w-125">
                    <HeaderForm/>
                </div>

            </div>
        </div>
    )
};

export default Header;