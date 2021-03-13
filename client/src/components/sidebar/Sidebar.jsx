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
    <ProSidebar className="Sidebar" rtl={true} image="background.jpg">
      <SidebarHeader>
        {/**
         *  You can add a header for the sidebar ex: logo
         */}
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="square">
          <MenuItem>Dashboard</MenuItem>
          {props.currentUser && <MenuItem>Logout</MenuItem>}
          {!props.currentUser && (
            <>
              <MenuItem onClick={props.onCreateAccount}>Register</MenuItem>
              <MenuItem onClick={props.onLogin}>Login</MenuItem>
            </>
          )}
        </Menu>
      </SidebarContent>
      <SidebarFooter>
        {/**
         *  You can add a footer for the sidebar ex: copyright
         */}
      </SidebarFooter>
    </ProSidebar>
  );
}
