import { Meta, StoryFn } from '@storybook/react';
import { Description, DescriptionProps } from '.';

export default {
  title: 'Description',
  component: Description,
} as Meta<DescriptionProps>;

const Template: StoryFn<typeof Description> = (args) => (
  <Description {...args} />
);

export const Primary = Template.bind({});
