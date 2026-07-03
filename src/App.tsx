import React from "react";
// import NavBar from "./ui/Navbar";
import AppLayout from "./HomePageLayout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
  },
  {path: "login", "Component": Login},
  {path: "register", "Component": SignUp}
]);

const App: React.FC = () => {
  return (
    <div className="w-full h-screen darkMode">
      {/* <NavBar/> */}
      <RouterProvider router={router}/>
    </div>
  );
};

export default App;
