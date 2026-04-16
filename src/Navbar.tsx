import { useState } from "react";

export default function NavBar() {
    const [navPages, setNavPages] = useState(["Trains", "Bookings", "Locations", "Search"]);
    const [currentPage, setCurrentPage] = useState("Bookings");

    return (
        <nav className="bg-amber-300 w-212.5 h-27.5 flex  absolute bottom-[5%] left-1/2 -translate-x-1/2 -translate-y-1/2 items-center ">
            <div className="flex-1">
                <img src="favicon.svg" alt="slimes" />
            </div>
            <div className="flex grow rounded-[70px] max-w-5xl h-22 border-2
             border-amber-200  bg-red-400 flex-2/4">
                <ul className="size-full flex justify-around items-center text-base">
                    {navPages.map((element, index) => currentPage == element ? <li className='w-25 h-15 bg-blue-500 text-center rounded-[70px] py-4 font-testing-font'>{element}</li>
                     : <li className='bg-transparent cursor-pointer' onClick={() => setCurrentPage(element)}>{element}</li>)}
                </ul>

            </div>
            <div className="flex-1 h-full flex item-center ml-5">
                <button className="w-45 h-22 bg-black text-amber-50 
                rounded-[45px] m-auto text-2xl font-serif">Contact Us</button>
            </div>

        </nav>
    );
}