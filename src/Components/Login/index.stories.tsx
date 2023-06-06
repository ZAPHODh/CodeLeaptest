import { Meta, StoryFn } from '@storybook/react';
import { LoginForm } from '.';

export default {
  title: 'LoginForm',
  component: LoginForm,
} as Meta;

const Template: StoryFn<typeof LoginForm> = () => <LoginForm />;

export const Primary = Template.bind({});
//default values
// Primary.args = {
//     title: 'teste',
// }
