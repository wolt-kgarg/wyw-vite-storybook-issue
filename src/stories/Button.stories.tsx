import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';
import { styled } from '@linaria/react';
import { fn } from 'storybook/test';
import {action} from 'storybook/actions';

import { Button } from './Button';
import { expect, within   } from 'storybook/test';

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 24px;
`;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  decorators: [(storyFn) => <Wrapper>{storyFn()}</Wrapper>],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};
Primary.play =  async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const sponsoredButton = canvas.queryByRole('button', { name: /sponsored/i });
  await expect(sponsoredButton).toBeNull();
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

export const ReactHookForm: StoryFn = () => {

  return (
    <form onSubmit={action('form submitted')}>
      <input
        type="text"
        name="example"
        onChange={action('input changed')}
        placeholder="Type something..."
        style={{ marginBottom: '8px', padding: '8px', width: '100%' }}
      />
    </form>
  );
};
