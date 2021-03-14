import React from "react";
import SideBar from "../components/Sidebar";

export default {
  title: "SideBar/Login",
  component: SideBar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <SideBar {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  currentUser: "Bruce",
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...LoggedIn.args,
  currentUser: "",
};
