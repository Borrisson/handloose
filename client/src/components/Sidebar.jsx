import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faQuestion,
  faChartBar,
  faUserPlus,
  faUserTimes,
  faStar,
  faRunning,
} from "@fortawesome/free-solid-svg-icons";

import {
  getHighestScoreFromUser,
  getLongestStreakFromUser,
} from "../helpers/selectors";

export default function SideBar({ state, handleShow, handleLogout, score }) {
  const [collapse, setCollapse] = useState(false);

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleCollapse() {
    if (windowSize.width <= 922 && !collapse) {
      setCollapse(true);
    }

    if (windowSize.width > 922 && collapse) {
      setCollapse(false);
    }
  }

  handleCollapse();
  return (
    <ProSidebar collapsed={collapse} className="sidebar" image="background.jpg">
      <SidebarHeader className="sidebar sidebar-header">
        <MenuItem className="sidebar item">
          <img alt="logo" src="logo.gif"></img>
        </MenuItem>
        {state.user.name && <MenuItem>Welcome, {state.user.name}!</MenuItem>}
      </SidebarHeader>
      <SidebarContent className="sidebar sidebar-body">
        <Menu className="sidebar sidebar-menu">
          <MenuItem
            icon={<FontAwesomeIcon icon={faChartBar} />}
            className="sidebar item"
            onClick={() => handleShow("leaderboard")}
          >
            Leaderboard
          </MenuItem>
          {state.user.name && (
            <MenuItem
              icon={<FontAwesomeIcon icon={faUserTimes} />}
              className="sidebar item"
              onClick={handleLogout}
            >
              Logout
            </MenuItem>
          )}
          {!state.user.name && (
            <>
              <MenuItem
                className="sidebar item"
                onClick={() => handleShow("register")}
                icon={<FontAwesomeIcon icon={faUserPlus} />}
              >
                Register
              </MenuItem>
              <MenuItem
                className="sidebar item"
                onClick={() => handleShow("login")}
                icon={<FontAwesomeIcon icon={faUser} />}
              >
                Login
              </MenuItem>
            </>
          )}
          <MenuItem
            className="sidebar item"
            onClick={() => handleShow("about")}
            icon={<FontAwesomeIcon icon={faQuestion} />}
          >
            About
          </MenuItem>
        </Menu>
      </SidebarContent>

      {state.user.name && (
        <SidebarFooter>
          <Menu className="sidebar sidebar-menu">
            <MenuItem
              icon={<FontAwesomeIcon icon={faStar} />}
              className="sidebar item"
            >
              Highest Score
            </MenuItem>
            <MenuItem icon={<i></i>} className="sidebar item">
              {getHighestScoreFromUser(state)}
            </MenuItem>
            <MenuItem
              icon={<FontAwesomeIcon icon={faRunning} />}
              className="sidebar item"
            >
              Longest Streak
            </MenuItem>
            <MenuItem icon={<i></i>} className="sidebar item">
              {getLongestStreakFromUser(state)}
            </MenuItem>
          </Menu>
        </SidebarFooter>
      )}
      <SidebarFooter>
        <MenuItem className="sidebar sidebar-footer">Copyright 2021</MenuItem>
      </SidebarFooter>
    </ProSidebar>
  );
}
