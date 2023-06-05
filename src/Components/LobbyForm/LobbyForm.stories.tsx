import { Meta, StoryFn } from '@storybook/react';
import { LobbyForm } from '.';

export default {
  title: 'LobbyForm',
  component: LobbyForm,
} as Meta;

const Template: StoryFn<typeof LobbyForm> = () => <LobbyForm />;

export const Primary = Template.bind({});
//default values
// Primary.args = {
//     title: 'teste',
// }
