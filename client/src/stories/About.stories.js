import React from "react";
import About from "../components/About";

export default {
  title: "About",
  component: About,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <About {...args} />;

export const Form = Template.bind({});
