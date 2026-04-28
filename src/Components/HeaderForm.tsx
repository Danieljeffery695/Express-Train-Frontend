import React from "react";

const HeaderForm: React.FC = () => {
  return (
      <div className="form-container">
        <div className="form-content">
          <div className="title-section">
            <svg className="title-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            <p className="title">Dossier</p>
          </div>
          <form className="form">

            {/* First input field */}
            <div className="input-group">
              <div className="input-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx={12} cy={7} r={4} />
                </svg>
              </div>
              <div className="input-content">
                <label htmlFor="FromCity">From</label>
                <input type="text" name="FromCity" id="FromCity" placeholder="City or Station" />
              </div>
            </div>

            {/* Second input field */}
            <div className="input-group">
              <div className="input-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x={3} y={11} width={18} height={11} rx={2} ry={2} />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
              </div>
              <div className="input-content">
                <label htmlFor="ToCity">To</label>
                <input type="text" name="ToCity" id="ToCity" placeholder="City or Station" />
              </div>
            </div>


            <div className="journeySwitchBtn-div">
                <button>One-way</button>
                <button>Return</button>
            </div>

            {/* Third input field */}
            <div className="input-group">
              <div className="input-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x={3} y={11} width={18} height={11} rx={2} ry={2} />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
              </div>
              <div className="input-content">
                <label htmlFor="TravelDate">Password</label>
                <input type="text" name="TravelDate" id="TravelDate" placeholder="Mon 27 April . 10:15 PM" />
              </div>
            </div>


            {/* Fourth input field */}
            <div className="input-group">
              <div className="input-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x={3} y={11} width={18} height={11} rx={2} ry={2} />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
              </div>
              <div className="input-content">
                <label htmlFor="ReturnDate">Password</label>
                <input type="text" name="ReturnDate" id="ReturnDate" placeholder="Web 29 April . 1:15 AM" />
              </div>
            </div>

            <div className="InformationBtnDiv">
                <button>2 Adults</button>
            </div>


            <button className="sign" type="submit">
              <span>Sign In</span>
              <span className="sign-arrow">→</span>
            </button>
          </form>
        
        </div>
      </div>
  );
}


export default HeaderForm;