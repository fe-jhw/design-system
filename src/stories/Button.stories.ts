import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components'

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    type: 'primary',
    children: 'Button',
  },
}

export const Text: Story = {
  args: {
    type: 'text',
    children: 'Button',
  },
}

export const Danger: Story = {
  args: {
    danger: true,
    children: 'Button',
  },
}
