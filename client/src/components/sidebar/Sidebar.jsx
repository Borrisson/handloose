import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import User from "./User";

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
          <User />
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
