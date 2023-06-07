import { Meta, StoryFn } from '@storybook/react';
import { Menu, MenuProps } from '.';

export default {
  title: 'Menu',
  component: Menu,
} as Meta<MenuProps>;

const Template: StoryFn<typeof Menu> = (args) => <Menu {...args} />;

export const Primary = Template.bind({});
//default values
Primary.args = {
  menuLink: [
    { name: 'story', to: '#' },
    { name: 'story', to: '#' },
    { name: 'story', to: '#' },
    { name: 'story', to: '#' },
  ],
};
