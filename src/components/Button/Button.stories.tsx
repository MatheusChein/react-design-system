import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './index';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Sign in',
    disabled: false,
  },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
};
