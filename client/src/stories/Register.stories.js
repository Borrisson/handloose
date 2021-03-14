import React from "react";
import Register from "../components/Register";

export default {
  title: "Forms/Register",
  component: Register,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Register {...args} />;

export const Form = Template.bind({});
