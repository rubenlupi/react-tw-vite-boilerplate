import { Meta, StoryFn } from "@storybook/react";
import { Input, InputProps } from "./Input"; // Adjust the import path as necessary
import { InputStyle } from "./Input.style";

export default {
  title: "Components/InputField",
  component: Input,
} as Meta;

const Template: StoryFn<InputProps> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  register: () => {},
  name: "example",
  type: "text",
  placeholder: "Enter text",
  classStyle: InputStyle.primary,
  error: "",
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  classStyle: InputStyle.secondary,
};

export const WithError = Template.bind({});
WithError.args = {
  ...Primary.args,
  error: "Error message",
};
