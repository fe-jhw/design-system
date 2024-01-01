import type { Meta, StoryObj } from '@storybook/react'

import { Timeline } from '../components'

const meta = {
  title: 'Example/Timeline',
  component: Timeline,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Timeline>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    items: ['1: 밥먹기', '2: 설거지하기', '3: 음식물쓰레기 처리', '4: 커피 마시기'],
  },
}
