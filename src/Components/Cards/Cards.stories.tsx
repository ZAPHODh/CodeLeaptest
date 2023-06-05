import { Meta, StoryFn } from '@storybook/react';
import { Cards, CardsProps } from '.';

export default {
  title: 'Cards',
  component: Cards,
} as Meta<CardsProps>;

const Template: StoryFn<typeof Cards> = (args) => <Cards {...args} />;

export const Primary = Template.bind({});
//default values
// Primary.args = {
//     title: 'teste',
// }
