import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

export default function SideBar({
  currentUser,
  handleShow,
  handleLogout,
  highScore,
}) {
  return (
    <ProSidebar className="sidebar" rtl={true} image="background.jpg">
      <SidebarHeader className="sidebar sidebar-header">
        <MenuItem className="sidebar item">
          <img alt="logo" src="logo.gif"></img>
        </MenuItem>
        {currentUser.name && (
          <MenuItem className="Welcome">!Welcome, {currentUser.name}</MenuItem>
        )}
      </SidebarHeader>
      <SidebarContent className="sidebar sidebar-body">
        <Menu className="sidebar sidebar-menu">
          <MenuItem className="sidebar item">Dashboard</MenuItem>
          {currentUser.name && (
            <MenuItem className="sidebar item" onClick={handleLogout}>
              Logout
            </MenuItem>
          )}
          {!currentUser.name && (
            <>
              <MenuItem
                className="sidebar item"
                onClick={() => handleShow("register")}
              >
                Register
              </MenuItem>
              <MenuItem
                className="sidebar item"
                onClick={() => handleShow("login")}
              >
                Login
              </MenuItem>
            </>
          )}
          <MenuItem
            className="sidebar item"
            onClick={() => handleShow("about")}
          >
            About
          </MenuItem>
        </Menu>
      </SidebarContent>
      <SidebarFooter>
        <Menu className="sidebar sidebar-menu">
          <MenuItem className="sidebar item">Highest Score</MenuItem>
          <MenuItem className="sidebar item">{}</MenuItem>
          <MenuItem className="sidebar item">Streak</MenuItem>
          <MenuItem className="sidebar item">{}</MenuItem>
          <MenuItem className="sidebar item">Score</MenuItem>
          <MenuItem className="sidebar item">{}</MenuItem>
        </Menu>
      </SidebarFooter>
      <SidebarFooter>
        <MenuItem className="sidebar sidebar-footer">Copyright 2021</MenuItem>
      </SidebarFooter>
    </ProSidebar>
  );
}
