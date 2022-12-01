import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Form, Input, Space } from 'antd';
import { SmileOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';

export default {
  title: 'antd/Input',
  component: Input,
  argTypes: {
    addonAfter: {
      description: 'The label text displayed after (on the right side of) the input field',
      control: { type: 'text' },
      table: { type: { summary: 'ReactNode' } },
    },
    addonBefore: {
      description: 'The label text displayed before (on the left side of) the input field',
      control: { type: 'text' },
      table: { type: { summary: 'ReactNode' } },
    },
    allowClear: {
      description: 'If allow to remove input content with clear icon',
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean | {clearIcon: ReactNode}' },
      },
    },
    // bordered: {
    //   description: 'Whether has border style',
    //   control: { type: 'boolean' },
    //   defaultValue: true,
    //   table: { defaultValue: { summary: 'true' }, type: { summary: 'boolean' } },
    // },
    defaultValue: {
      description: 'The initial input content',
      control: { type: 'text' },
      table: { type: { summary: 'string' } },
    },
    disabled: {
      description: 'Whether the input is disabled',
      control: { type: 'boolean' },
      defaultValue: false,
      table: { defaultValue: { summary: 'false' }, type: { summary: 'boolean' } },
    },
    maxLength: {
      description: 'The max length',
      control: { type: 'number' },
      table: { type: { summary: 'number' } },
    },
    placeholder: {
      description: 'Placeholder',
      control: { type: 'text' },
      table: { type: { summary: 'string' } },
    },
    prefix: {
      description: 'The prefix icon for the Input',
      control: { type: 'text' },
      table: { type: { summary: 'ReactNode' } },
    },
    showCount: {
      description: 'Whether show text count',
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary:
            'boolean | { formatter: (info: { value: string, count: number, maxLength?: number }) => ReactNode }',
        },
      },
    },
    size: {
      description: 'The size of the input box',
      control: { type: 'select', options: ['large', 'middle', 'small'] },
      defaultValue: 'middle',
      table: { defaultValue: { summary: 'middle' }, type: { summary: 'string' } },
    },
    status: {
      description: 'Set validation status',
      control: { type: 'select', options: ['', 'error', 'warning'] },
      table: { type: { summary: 'string' } },
    },
    suffix: {
      description: 'The suffix icon for the Input',
      control: { type: 'text' },
      table: { type: { summary: 'ReactNode' } },
    },
    type: {
      description: 'The type of input',
      control: {
        type: 'select',
        options: [
          'button',
          'checkbox',
          'color',
          'date',
          'datetime-local',
          'email',
          'file',
          'hidden',
          'image',
          'month',
          'number',
          'password',
          'radio',
          'range',
          'reset',
          'search',
          'submit',
          'tel',
          'text',
          'time',
          'url',
          'week',
        ],
      },
      defaultValue: 'text',
      table: { defaultValue: { summary: 'text' }, type: { summary: 'string' } },
    },
    value: {
      description: 'The input content value',
      control: { type: 'text' },
      table: { type: { summary: 'string' } },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <Space direction="vertical">
    <Space>
      <Input placeholder="e.g. placeholder" {...args}></Input>
      <Input placeholder="e.g. placeholder" prefix={<UserOutlined />} {...args}></Input>
      <Input placeholder="e.g. placeholder" suffix={<UserOutlined />} {...args}></Input>
    </Space>

    <Space>
      <Input placeholder="e.g. placeholder" defaultValue="lorem ipsum" {...args}></Input>
      <Input
        placeholder="e.g. placeholder"
        defaultValue="lorem ipsum"
        prefix={<UserOutlined />}
        {...args}
      ></Input>
      <Input
        placeholder="e.g. placeholder"
        defaultValue="lorem ipsum"
        suffix={<UserOutlined />}
        {...args}
      ></Input>
    </Space>
  </Space>
);

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  status: 'error',
};

export const Warning = Template.bind({});
Warning.args = {
  status: 'warning',
};

export const WithCaption: ComponentStory<typeof Input> = (args) => (
  <Form
    labelCol={{
      xs: { span: 24 },
      sm: { span: 6 },
    }}
    wrapperCol={{
      xs: { span: 24 },
      sm: { span: 14 },
    }}
  >
    <Form.Item label="Fail" validateStatus="error" help="Lorem ipsum dolor sit amet">
      <Input value="lorem ipsum" id="error" {...args} />
    </Form.Item>

    <Form.Item label="Warning" validateStatus="warning" help="Lorem ipsum dolor sit amet">
      <Input value="lorem ipsum" id="warning" prefix={<SmileOutlined />} {...args} />
    </Form.Item>

    <Form.Item
      label="Validating"
      hasFeedback
      validateStatus="validating"
      help="Lorem ipsum dolor sit amet"
    >
      <Input value="lorem ipsum" id="validating" {...args} />
    </Form.Item>

    <Form.Item label="Success" hasFeedback validateStatus="success">
      <Input value="lorem ipsum" id="success" {...args} />
    </Form.Item>

    <Form.Item
      label="Warning"
      hasFeedback
      validateStatus="warning"
      help="Lorem ipsum dolor sit amet"
    >
      <Input value="lorem ipsum" id="warning2" {...args} />
    </Form.Item>

    <Form.Item label="Fail" hasFeedback validateStatus="error" help="Lorem ipsum dolor sit amet">
      <Input value="lorem ipsum" id="error2" {...args} />
    </Form.Item>
  </Form>
);
