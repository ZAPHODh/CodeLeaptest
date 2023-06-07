import { Meta, StoryFn } from '@storybook/react';
import { MenuLink, MenuLinkProps } from '.';

export default {
  title: 'MenuLink',
  component: MenuLink,
} as Meta<MenuLinkProps>;

const Template: StoryFn<typeof MenuLink> = (args) => <MenuLink {...args} />;

export const Primary = Template.bind({});
//default values
Primary.args = {
  children: 'story',
  href: '#',
};
