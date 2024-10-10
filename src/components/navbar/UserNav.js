import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useState, useEffect } from "react";
import "./usernav.scss";

import useOutsideClick from "../../utils/useOutsideClick";

const UserNav = () => {
  const { dispatch, darkMode } = useContext(DarkModeContext);

  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const handleClickOutside = () => {
    setToggleMenu(false);
  };

  const ref = useOutsideClick(handleClickOutside);

  return (
    <>
      <div style={{ width: "100%" }}>
        {(toggleMenu || screenWidth > 680) && (
          <div className="items" ref={ref}>
            <div className="item">
              <LanguageOutlinedIcon className="icon" />
              <span className="label">English</span>
            </div>
            <div className="item">
              {darkMode ? (
                <>
                  <LightModeOutlinedIcon
                    className="icon"
                    onClick={() => dispatch({ type: "TOGGLE" })}
                  />
                  <span className="label">Light</span>
                </>
              ) : (
                <>
                  <DarkModeOutlinedIcon
                    className="icon"
                    onClick={() => dispatch({ type: "TOGGLE" })}
                  />
                  <span className="label">Dark</span>
                </>
              )}
            </div>
            <div className="item">
              <FullscreenExitOutlinedIcon className="icon" />
              <span className="label">FullScreen</span>
            </div>
            <div className="item">
              <NotificationsNoneOutlinedIcon className="icon" />
              <span className="label">Notifications</span>
              <div className="counter">1</div>
            </div>
            <div className="item">
              <ChatBubbleOutlineOutlinedIcon className="icon" />
              <span className="label">Messages</span>
              <div className="counter">2</div>
            </div>
            <div className="item">
              <ListOutlinedIcon className="icon" />
              <span className="label">Lists</span>
            </div>
          </div>
        )}
      </div>
      <div className="itemsRight">
        <div className="item toggleAvatar" style={{ marginRight: "10px" }}>
          <SettingsOutlinedIcon className="icon" onClick={toggleNav} />
        </div>
        <div className="item" style={{}}>
          <img
            src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="avatar"
          />
        </div>
      </div>
    </>
  );
};
export default UserNav;
