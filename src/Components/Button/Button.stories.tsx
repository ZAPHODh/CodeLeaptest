import { Meta, StoryFn } from '@storybook/react';
import { Button, ButtonProps } from '.';

export default {
  title: 'Button',
  component: Button,
} as Meta<ButtonProps>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
//default values
Primary.args = {
  children: 'teste',
};
