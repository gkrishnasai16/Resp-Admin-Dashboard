import { Outlet } from "react-router-dom";

import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";

import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

import "./app.scss";
import "./style/dark.scss";

const Layout = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className="app">
      <div className="main">
        <Sidebar />
        <div
          className={darkMode === true ? "mainContainer dark" : "mainContainer"}
        >
          <Navbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Layout;
