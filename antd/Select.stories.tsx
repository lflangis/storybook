import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select, SelectProps } from 'antd';
import React from 'react';

export default {
  title: 'antd/Select',
  component: Select,
  argTypes: {
    allowClear: {
      description: 'If allow to remove input content with clear icon',
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean | {clearIcon: ReactNode}' },
      },
    },
    autoClearSearchValue: {
      description:
        'Whether the current search will be cleared on selecting an item. Only applies when mode is set to multiple or tags',
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    bordered: {
      description: 'Whether has border style',
      control: { type: 'boolean' },
      defaultValue: true,
      table: { defaultValue: { summary: 'true' }, type: { summary: 'boolean' } },
    },
    clearIcon: {
      description: 'The custom clear icon',
      control: { type: 'text' },
      table: { type: { summary: 'ReactNode' } },
    },
    defaultActiveFirstOption: {
      description: 'Whether active first option by default',
      control: { type: 'boolean' },
      table: { defaultValue: { summary: 'false' }, type: { summary: 'boolean' } },
    },
    defaultOpen: {
      description: 'Initial open state of dropdown',
      control: { type: 'boolean' },
      defaultValue: false,
      table: { defaultValue: { summary: 'false' }, type: { summary: 'boolean' } },
    },
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
    dropdownMatchSelectWidth: {
      description:
        'min-width same as input. Will ignore when value less than select width. false will disable virtual scroll',
      control: { type: 'boolean' },
      defaultValue: true,
      table: { defaultValue: { summary: 'true' }, type: { summary: 'boolean' } },
    },
    loading: {
      description: 'Indicate loading state',
      control: { type: 'boolean' },
      defaultValue: false,
      table: { defaultValue: { summary: 'false' }, type: { summary: 'boolean' } },
    },
    maxTagCount: {
      description: 'Max tag count to show. responsive will cost render performance',
      control: { type: 'number' },
      defaultValue: 4,
      table: { defaultValue: { summary: '4' }, type: { summary: 'number' } },
    },
    maxTagPlaceholder: {
      description: 'Placeholder for not showing tags',
      control: { type: 'text' },
      table: { type: { summary: 'ReactNode' } },
    },
    maxTagTextLength: {
      description: 'Max tag count to show. responsive will cost render performance',
      control: { type: 'number' },
      defaultValue: 10,
      table: { defaultValue: { summary: 'N/A' }, type: { summary: 'number' } },
    },
    mode: {
      description: 'Set mode of Select',
      control: {
        type: 'select',
        options: ['multiple', 'tags'],
      },
      defaultValue: 'tags',
      table: { defaultValue: { summary: 'text' }, type: { summary: 'string' } },
    },
    placeholder: {
      description: 'Placeholder',
      defaultValue: 'e.g. placeholder',
      control: { type: 'text' },
      table: {
        defaultValue: { summary: 'e.g. placeholder' },
        type: { summary: 'string' },
      },
    },
    showSearch: {
      description: 'Whether select is searchable',
      control: { type: 'boolean' },
      defaultValue: true,
      table: { defaultValue: { summary: 'true' }, type: { summary: 'boolean' } },
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
    suffixIcon: {
      description: 'The suffix icon for the Input',
      control: { type: 'text' },
      table: { type: { summary: 'ReactNode' } },
    },
    value: {
      description: 'The input content value',
      control: { type: 'text' },
      table: { type: { summary: 'string' } },
    },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
  const options: SelectProps['options'] = [];
  for (let i = 10; i < 36; i++) {
    options.push({
      label: `option ${i}`,
      value: `option-${i}`,
    });
  }

  return <Select onChange={() => {}} options={options} {...args} />;
};

export const Multiple = Template.bind({});
