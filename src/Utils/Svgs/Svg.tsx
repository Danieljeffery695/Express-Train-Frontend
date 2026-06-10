import React from "react";

const TrainRailWaySvg: React.FC = () => {
    return (

        
        <div className="w-100 bg-[#f5f5f5] p-10">
      <svg
        viewBox="0 0 1200 300"
        className="w-full h-auto overflow-visible"
      >
        <defs>
          {/* =========================================
              TRACK PATTERN
          ========================================== */}
          <pattern
            id="railwayPattern"
            patternUnits="userSpaceOnUse"
            width="40"
            height="40"
            patternTransform="rotate(90)"
          >
            {/* Sleepers */}
            <rect
              x="0"
              y="10"
              width="40"
              height="10"
              rx="2"
              fill="#7b4f2a"
            />
          </pattern>

          {/* =========================================
              MAIN PATH
          ========================================== */}
          <path
            id="rail-path"
            d="
              M 50 220
              C 200 40, 400 40, 550 180
              S 850 320, 1150 120
            "
          />

          {/* =========================================
              GLOW
          ========================================== */}
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* =========================================
            SLEEPERS FOLLOWING PATH
        ========================================== */}
        <use
          href="#rail-path"
          fill="none"
          stroke="url(#railwayPattern)"
          strokeWidth="34"
          strokeLinecap="round"
          opacity="0.95"
        />

        {/* =========================================
            CENTER DARK BASE
        ========================================== */}
        <use
          href="#rail-path"
          fill="none"
          stroke="#2b2b2b"
          strokeWidth="18"
          strokeLinecap="round"
        />

        {/* =========================================
            LEFT RAIL
        ========================================== */}
        <use
          href="#rail-path"
          fill="none"
          stroke="#c7c7c7"
          strokeWidth="3"
          transform="translate(0,-7)"
          filter="url(#softGlow)"
        />

        {/* =========================================
            RIGHT RAIL
        ========================================== */}
        <use
          href="#rail-path"
          fill="none"
          stroke="#c7c7c7"
          strokeWidth="3"
          transform="translate(0,7)"
          filter="url(#softGlow)"
        />

        {/* =========================================
            OPTIONAL CENTER HIGHLIGHT
        ========================================== */}
        <use
          href="#rail-path"
          fill="none"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="1"
        />
      </svg>
    </div> 
    )
}

export default TrainRailWaySvg;