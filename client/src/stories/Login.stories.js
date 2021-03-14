import React from "react";
import Login from "../components/Login";

export default {
  title: "Forms/Login",
  component: Login,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Login {...args} />;

export const Form = Template.bind({});
