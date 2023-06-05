import { Meta, StoryFn } from '@storybook/react';
import { MaxQuantity, MaxQuantityProps } from '.';

export default {
  title: 'MaxQuantity',
  component: MaxQuantity,
} as Meta<MaxQuantityProps>;

const Template: StoryFn<typeof MaxQuantity> = (args) => (
  <MaxQuantity {...args} />
);

export const Primary = Template.bind({});
//default values
// Primary.args = {
//     title: 'teste',
// }
