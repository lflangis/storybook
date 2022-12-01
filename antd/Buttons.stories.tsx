import { UserOutlined } from '@ant-design/icons';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, Space } from 'antd';
import React from 'react';

export default {
  title: 'antd/Button',
  component: Button,
  argTypes: {
    block: {
      description: 'Option to fit button width to its parent width',
      control: { type: 'boolean' },
      defaultValue: false,
      table: { defaultValue: { summary: 'false' }, type: { summary: 'boolean' } },
    },
    children: {
      description: 'Button content',
      control: { type: 'text' },
      table: { type: { summary: 'ReactNode' } },
    },
    danger: {
      description: 'Set the danger status of button',
      control: { type: 'boolean' },
      defaultValue: false,
      table: { defaultValue: { summary: 'false' }, type: { summary: 'boolean' } },
    },
    disabled: {
      description: 'Disabled state of button',
      control: { type: 'boolean' },
      defaultValue: false,
      table: { defaultValue: { summary: 'false' }, type: { summary: 'boolean' } },
    },
    ghost: {
      description: 'Make background transparent and invert text and border colors',
      control: { type: 'boolean' },
      defaultValue: false,
      table: { defaultValue: { summary: 'false' }, type: { summary: 'boolean' } },
    },
    href: {
      description: 'Redirect url of link button',
      control: { type: 'text' },
      table: { type: { summary: 'string' } },
    },
    htmlType: {
      description: 'Set the original html type of button',
      control: { type: 'select', options: ['button', 'submit', 'reset'] },
      defaultValue: 'button',
      table: { defaultValue: { summary: 'button' }, type: { summary: 'string' } },
    },
    icon: {
      description: 'Set the icon component of button',
      table: { type: { summary: 'ReactNode' } },
    },
    loading: {
      description: 'Set the loading status of button',
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean or { delay: number }' },
      },
    },
    shape: {
      description: 'Set button shape',
      control: { type: 'select', options: ['default', 'circle', 'round'] },
      defaultValue: 'default',
      table: { defaultValue: { summary: 'default' }, type: { summary: 'string' } },
    },
    size: {
      description: 'Size of button',
      control: { type: 'select', options: ['large', 'middle', 'small'] },
      defaultValue: 'middle',
      table: { defaultValue: { summary: 'middle' }, type: { summary: 'string' } },
    },
    target: {
      description: 'Same as target attribute of a, works when href is specified',
      control: { type: 'text' },
      table: { type: { summary: 'string' } },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Space size={16}>
    <Button type="default" {...args}>
      {args.children || 'Default'}
    </Button>
    <Button type="primary" {...args}>
      {args.children || 'Primary'}
    </Button>
    <Button type="ghost" {...args}>
      {args.children || 'Ghost'}
    </Button>
    <Button type="dashed" {...args}>
      {args.children || 'Dashed'}
    </Button>
    <Button type="link" {...args}>
      {args.children || 'Link'}
    </Button>
    <Button type="text" {...args}>
      {args.children || 'Text'}
    </Button>
  </Space>
);

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  danger: true,
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Icon = Template.bind({});
Icon.args = {
  icon: <UserOutlined />,
};
