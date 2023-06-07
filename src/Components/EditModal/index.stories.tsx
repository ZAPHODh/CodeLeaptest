import { Meta, StoryFn } from '@storybook/react';
import { EditModal, EditModalProps } from '.';
import { EditModalProvider } from '@/context/EditModalContext';

export default {
  title: 'EditModal',
  component: EditModal,
} as Meta<EditModalProps>;

const Template: StoryFn<typeof EditModal> = (args) => (
  <EditModalProvider>
    <EditModal {...args} />
  </EditModalProvider>
);

export const Primary = Template.bind({});
//default values
// Primary.args = {
//     title: 'teste',
// }
