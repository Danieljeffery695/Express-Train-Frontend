import React, { useState } from "react";
import { WiTrain } from "react-icons/wi";
import { LuTrainTrack } from "react-icons/lu";
import { IconContext } from "react-icons";
import { IoTrainOutline } from "react-icons/io5";
import { BsCalendar2DateFill } from "react-icons/bs";
import { TiGroup } from "react-icons/ti";
import { CgRedo } from "react-icons/cg";
import { TbTrainFilled } from "react-icons/tb";

const HeaderForm: React.FC = () => {
  const [journeyRoute, setJourneyRoute] = useState<string>("oneWay");
  
  return (
      <div className="form-container">
        <div className="form-content">
          <IconContext.Provider value={{"size": "3rem"}}>
          <div className="title-section">
            <WiTrain/>
            <p className="title">Express-Train</p>
          </div>
          </IconContext.Provider>
          <form className="form">

            {/* First input field */}
            <div className="input-group">
              <IconContext.Provider value={{"size": "2rem"}}>
              <div className="input-icon">
                <LuTrainTrack/>
              </div>
              </IconContext.Provider>
              <div className="input-content">
                <label htmlFor="FromCity">From</label>
                <input type="text" name="FromCity" id="FromCity" placeholder="City or Station" />
              </div>
            </div>

            {/* Second input field */}
            <div className="input-group">
              <div className="input-icon">
                <IconContext.Provider value={{"size": "2rem"}}>
                  <IoTrainOutline/>
                </IconContext.Provider>
              </div>
              <div className="input-content">
                <label htmlFor="ToCity">To</label>
                <input type="text" name="ToCity" id="ToCity" placeholder="City or Station" />
              </div>
            </div>


            <div className="w-[90%] h-18.75 flex justify-between items-center self-center">

                <button className={`w-50 h-12.5 text-sm font-Sekuya text-black rounded-xl ml-2 cursor-pointer
                 ${journeyRoute != 'return' ? 'darkMode-form-btn-color1 cursor-not-allowed!' : 'darkMode-form-btn-color' }`}
                    onClick={() => setJourneyRoute("oneWay")} type="button">One-way</button>


                <button className={`w-50 h-12.5 text-sm font-Sekuya text-black rounded-xl ml-2 cursor-pointer
                 ${journeyRoute != 'oneWay' ? 'darkMode-form-btn-color1 cursor-not-allowed!' : 'darkMode-form-btn-color' }`}
                  onClick={() => setJourneyRoute("return")} type="button">Return</button>

          </div>

            {/* Third input field */}
            <div className="input-group">
              <div className="input-icon">
                <IconContext.Provider value={{"size": "2rem"}}>
                  <BsCalendar2DateFill />
                </IconContext.Provider>
              </div>
              <div className="input-content">
                <label htmlFor="TravelDate">Out</label>
                <input type="text" name="TravelDate" id="TravelDate" placeholder="Mon 27 April . 10:15 PM" />
              </div>
            </div>


            <div className={`input-group ${journeyRoute == 'oneWay' && 'hidden!'}`}>
              <div className="input-icon">
                <IconContext.Provider value={{"size": "2rem"}}>
                  <CgRedo />
                </IconContext.Provider>
              </div>
              <div className="input-content">
                <label htmlFor="TravelDate">Return</label>
                <input type="text" name="TravelDate" id="TravelDate" placeholder="Mon 27 April . 10:15 PM" />
              </div>
            </div>


            {/* Fourth input field */}

            <div className="w-full h-21.25 border border-darkMode-border-color flex cursor-pointer hover:border-darkMode-border-color1">
              <div className="flex-initial flex items-center pl-3!">
                 <div className="input-icon">
                    <IconContext.Provider value={{"size": "2rem"}}>
                      <TiGroup />
                    </IconContext.Provider>
                  </div>
              </div>


              <div className="flex-1 flex items-center gap-2 justify-center">
                <p className="font-Playfair text-xl">7 Adult</p>
              </div>

              <div className="flex-initial flex items-center w-10 justify-center">
                <h1 className="text-2xl">&#10095;</h1>
              </div>
            </div>


            {/* Submit Button */}
            <button className="sign" type="submit">
              <span>Sign In</span>
              <span className="sign-arrow">
                <IconContext.Provider value={{"size": "1.12rem"}}>
                    <TbTrainFilled />
                </IconContext.Provider>
              </span>
            </button>
          </form>
        
        </div>
      </div>
  );
}


export default HeaderForm;