import React from "react";
// import NavBar from "./Navbar";
import Header from "./Header";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="w-full h-screen darkMode">
      {/* <NavBar/> */}
      <div className="size-full overflow-x-hidden overflow-y-scroll">
        <Header/>
      </div>

    </div>
  );
}

export default App;