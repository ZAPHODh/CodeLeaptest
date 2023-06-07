import { Meta, StoryFn } from '@storybook/react';
import { DeleteModal, DeleteModalProps } from '.';

export default {
  title: 'DeleteModal',
  component: DeleteModal,
} as Meta<DeleteModalProps>;

const Template: StoryFn<typeof DeleteModal> = (args) => (
  <DeleteModal {...args} />
);

export const Primary = Template.bind({});
//default values
// Primary.args = {
//     title: 'teste',
// }
