import React from "react";
// import NavBar from "./Navbar";
// import Header from "./Header";
// import SectionOne from "./SectionOne";
// import SectionTwo from "./SectionTwo";
// import SectionThree from "./SectionThree";
// import SectionFour from "./SectionFour";
// import SectionFive from "./SectionFive";
import Footer from "./Footer";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="w-full h-screen darkMode">
      {/* <NavBar/> */}
      <div className="size-full overflow-x-hidden overflow-y-scroll">
        {/* <Header/> */}
        {/* <SectionOne/> */}
        {/* <SectionTwo/> */}
        {/* <SectionThree/> */}
        {/* <SectionFour/> */}
        {/* <SectionFive/> */}
        <Footer/>
      </div>

    </div>
  );
}

export default App;