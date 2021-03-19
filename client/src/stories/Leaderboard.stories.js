import React from "react";
import Leaderboard from "../components/Leaderboard";

export default {
  title: "Leaderboard",
  component: Leaderboard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Leaderboard {...args} />;

export const Form = Template.bind({});
Form.args = {
  show: true,
};
