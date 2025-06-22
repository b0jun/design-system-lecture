import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import PrimaryButton from '../components/PrimaryButton';

const meta = {
  title: 'Buttons/PrimaryButton',
  component: PrimaryButton,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '360px' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: {
        type: 'select',
        options: ['dark', 'light', 'social', 'text'],
      },
      description: '버튼 테마',
    },
    children: {
      control: 'text',
      description: '버튼 text',
    },
    disabled: {
      control: 'boolean',
      description: '버튼 비활성화 여부',
    },
    onClick: { action: 'clicked', description: '버튼 클릭 이벤트' },
  },
  args: {
    theme: 'dark',
    children: 'Button',
    disabled: false,
    onClick: fn(),
  },
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    theme: 'dark',
  },
};

export const Light: Story = {
  args: {
    theme: 'light',
  },
};

export const Social: Story = {
  args: {
    theme: 'social',
  },
};

export const Text: Story = {
  args: {
    theme: 'text',
  },
};

export const Disabled: Story = {
  args: {
    theme: 'dark',
    disabled: true,
  },
};
