import { Meta, StoryFn } from '@storybook/react';
import { CreatePost, CreatePostProps } from '.';

export default {
  title: 'CreatePost',
  component: CreatePost,
} as Meta<CreatePostProps>;

const Template: StoryFn<typeof CreatePost> = (args) => <CreatePost {...args} />;

export const Primary = Template.bind({});
//default values
// Primary.args = {
//     title: 'teste',
// }
