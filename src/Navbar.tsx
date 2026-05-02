import React from "react";
import { useState, useRef, useEffect, useCallback } from "react";
import { motion, type Variants } from "framer-motion";
import ContactUsBtn from "./Components/ContactUsBtn";

interface Pages {
    page: string,
    position: number[]
}

const navigationLiVariant: Variants = {
    hidden: {
        opacity: 0,
        y: "5vh",
    },

    visible: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: {delay: custom * 0.5, duration: custom * 0.5, type: "spring", mass: 2, damping: 5}
    })
}

const navigationVariant: Variants = {
    hidden: {
        opacity: 0,
        y: "15vh",
    },

    active: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            when: "beforeChildren", 
        },
    }
}

const NavBar: React.FC = () => {
    const [navPages, setNavPages] = useState<string[]>(["Trains", "Bookings", "Locations", "Search"]);
    const [currentPage, setCurrentPage] = useState<Pages[]>([
        {page: "Bookings", position: []}
    ]);
    const slideElement = useRef<HTMLDivElement | null>(null);
    const activeNavigationElement = useRef<HTMLLIElement | null>(null); 

    function activeIndicatorSlide(e: React.SyntheticEvent): void {
        if(slideElement.current != null) {
            const target  = e.target as HTMLUListElement;
            setCurrentPage([{page: target.innerText, position: [target.offsetLeft, target.offsetWidth] }]);
            slideElement.current.style.left = target.offsetLeft  + "px";
            slideElement.current.style.width = target.offsetWidth + "px";
        };
    }

    const resetActiveIndicator = useCallback(function resetActiveIndicator(): void {
        if(activeNavigationElement.current && slideElement.current) {
            slideElement.current.style.left = activeNavigationElement.current.offsetLeft  + "px";
            slideElement.current.style.width = activeNavigationElement.current.offsetWidth + "px";
        }
    }, []);
    
    useEffect(function() {
    window.addEventListener("load", resetActiveIndicator);

     return () => {
        window.removeEventListener("click", resetActiveIndicator);
    };
    }, [resetActiveIndicator])

    // Progress bar or border incoming
    return (
        <nav className="w-[70%] h-27.5 flex  absolute bottom-[5%] left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-around">
            <div className="flex-initial mr-5">
                <img src="favicon.svg" alt="slimes" />
            </div>
            <motion.div variants={navigationVariant} initial="hidden" animate="active" className="flex rounded-[70px] max-w-5xl h-22 flex-3/4
            bg-white-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 border-2 border-gray-100">
                <motion.ul initial="hidden" animate="visible" className="size-full flex items-center px-2 relative text-white">
                    <div className="h-15 glass rounded-[70px] absolute transition-all duration-500 ease-in-out" ref={slideElement}></div>

                    {navPages.map((element, index) => currentPage[0].page == element ? <motion.li custom={index + 1} variants={navigationLiVariant} className='z-10 text-center text-base font-Sekuya flex-1' 
                     ref={activeNavigationElement} key={index}>{element}</motion.li>

                     : <motion.li custom={index + 1} variants={navigationLiVariant} className='cursor-pointer flex-1 z-10 text-center font-Playfair text-lg' onClick={(e) => activeIndicatorSlide(e)} key={index}>{element}</motion.li>)}
                </motion.ul>

            </motion.div>
            <div className="flex-initial ml-5">
                <ContactUsBtn/>
            </div>

        </nav>
    );
}

export default NavBar;