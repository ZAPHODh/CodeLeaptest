import { Meta, StoryFn } from '@storybook/react';
import { Post, PostProps } from '.';

export default {
  title: 'Post',
  component: Post,
} as Meta<PostProps>;

const Template: StoryFn<typeof Post> = (args) => <Post {...args} />;

export const Primary = Template.bind({});
//default values
// Primary.args = {
//     title: 'teste',
// }
