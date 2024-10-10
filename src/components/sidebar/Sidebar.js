import { useState } from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import DataObjectOutlinedIcon from "@mui/icons-material/DataObjectOutlined";
import { NavLink } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const [isToggledMenu, setMenuToggle] = useState(false);
  const handleToggle = () => {
    let main = document.querySelector(".mainContainer");
    setMenuToggle(!isToggledMenu);
    isToggledMenu === true
      ? main.classList.remove("active")
      : main.classList.add("active");
  };
  const { dispatch, darkMode } = useContext(DarkModeContext);
  let activeClassName = "activeLink";
  return (
    <>
      <div
        onClick={handleToggle}
        className={isToggledMenu === true ? "toggle active" : "toggle"}
        style={darkMode ? { color: "#999" } : {}}
      >
        <ion-icon name="menu-outline"></ion-icon>
      </div>
      <div
        className={
          isToggledMenu === true
            ? "sidebar navigation active"
            : "sidebar navigation"
        }
        id={darkMode === true ? "dark" : ""}
      >
        <div className="sidebarTop">
          <NavLink
            to="/"
            style={{ textDecoration: "none", display: "inline-flex" }}
          >
            <DataObjectOutlinedIcon className="icon" />
            <span className="logo">MuxDev</span>
          </NavLink>
        </div>
        <hr />
        <div className="sidebarCenter">
          <ul>
            <p className="title">MAIN</p>
            <NavLink
              to="/"
              style={{ textDecoration: "none" }}
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              <li>
                <DashboardIcon className="icon" />
                <span>Dashboard</span>
              </li>
            </NavLink>
            <p className="title">LISTS</p>
            <NavLink
              to="/users"
              style={{ textDecoration: "none" }}
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              <li>
                <PersonOutlineIcon className="icon" />
                <span>Users</span>
              </li>
            </NavLink>
            <NavLink
              to="/products"
              style={{ textDecoration: "none" }}
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              <li>
                <StoreIcon className="icon" />
                <span>Products</span>
              </li>
            </NavLink>
            <li>
              <CreditCardIcon className="icon" />
              <span>Orders</span>
            </li>
            <li>
              <LocalShippingIcon className="icon" />
              <span>Delivery</span>
            </li>
            <p className="title">USEFUL</p>
            <li>
              <InsertChartIcon className="icon" />
              <span>Stats</span>
            </li>
            <li>
              <NotificationsNoneIcon className="icon" />
              <span>Notifications</span>
            </li>
            <p className="title">SERVICE</p>
            <li>
              <SettingsSystemDaydreamOutlinedIcon className="icon" />
              <span>System Health</span>
            </li>
            <li>
              <PsychologyOutlinedIcon className="icon" />
              <span>Logs</span>
            </li>
            <li>
              <SettingsApplicationsIcon className="icon" />
              <span>Settings</span>
            </li>
            <p className="title">USER</p>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Profile</span>
            </li>
            <li>
              <ExitToAppIcon className="icon" />
              <span>Logout</span>
            </li>
          </ul>
        </div>
        <div className="sidebarBottom">
          <div
            className="colorOption"
            onClick={() => dispatch({ type: "LIGHT" })}
          ></div>
          <div
            className="colorOption"
            onClick={() => dispatch({ type: "DARK" })}
          ></div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
