import { StoryFn, Meta } from "@storybook/react";
import { Button, ButtonProps } from "./Button";
import { ButtonClass } from "./Button.style";

export default {
  title: "Components/SubmitButton",
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isSubmitting: false,
  classStyle: ButtonClass.primary,
  children: "Label",
};

export const Submitting = Template.bind({});
Submitting.args = {
  ...Primary.args,
  isSubmitting: true,
  classStyle: ButtonClass.submit,
  children: "Submit",
};
