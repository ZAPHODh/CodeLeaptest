import { Meta, StoryFn } from '@storybook/react';
import { Card, CardProps } from '.';

export default {
  title: 'Card',
  component: Card,
} as Meta<CardProps>;

const Template: StoryFn<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
//default values
// Primary.args = {
//     title: 'teste',
// }
