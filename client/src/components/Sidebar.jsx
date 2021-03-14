import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

export default function SideBar(props) {
  return (
    <ProSidebar className="sidebar" rtl={true} image="background.jpg">
      <SidebarHeader className="sidebar sidebar-header">
        <MenuItem className="sidebar item">
          <img alt="logo" src="logo.gif"></img>
        </MenuItem>
      </SidebarHeader>
      <SidebarContent className="sidebar sidebar-body">
        <Menu className="sidebar sidebar-menu">
          <MenuItem className="sidebar item">Dashboard</MenuItem>
          {props.currentUser && (
            <MenuItem className="sidebar item">Logout</MenuItem>
          )}
          {!props.currentUser && (
            <>
              <MenuItem
                className="sidebar item"
                onClick={props.onCreateAccount}
              >
                Register
              </MenuItem>
              <MenuItem className="sidebar item" onClick={props.onLogin}>
                Login
              </MenuItem>
            </>
          )}
          <MenuItem className="sidebar item" onClick={props.onAbout}>
            About
          </MenuItem>
        </Menu>
      </SidebarContent>
      <SidebarFooter>
        <MenuItem className="sidebar sidebar-footer">Copyright 2021</MenuItem>
      </SidebarFooter>
    </ProSidebar>
  );
}
