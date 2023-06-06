import { Meta, StoryFn } from '@storybook/react';
import { Input, InputProps } from '.';

export default {
  title: 'Input',
  component: Input,
} as Meta<InputProps>;

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
//default values
// Primary.args = {
//     title: 'teste',
// }
