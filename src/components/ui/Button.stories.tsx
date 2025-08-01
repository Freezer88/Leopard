import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Home, Upload, Download } from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: 'Design System/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Button Component

The Button component implements psychological design principles from our Design Report:

### Psychological Design Principles
- **Trust-building colors**: Primary blue for main actions builds confidence
- **Clear visual hierarchy**: Different variants guide user attention
- **Empowering action-oriented design**: Clear CTAs with immediate feedback
- **Accessible focus states**: WCAG compliant focus indicators
- **Smooth micro-interactions**: Subtle animations provide feedback

### Usage Guidelines
- Use **Primary** buttons for main actions (e.g., "Analyze Policy", "Contact Agent")
- Use **Secondary** buttons for supporting actions (e.g., "Learn More", "Save Draft")
- Use **Accent** buttons for high-priority actions that need attention
- Use **Ghost** buttons for subtle actions (e.g., navigation, secondary actions)
- Use **Outline** buttons for alternative actions (e.g., "Cancel", "Back")
- Use **Danger** buttons sparingly for destructive actions (e.g., "Delete Policy")

### Accessibility
- All buttons are keyboard accessible
- Focus states are clearly visible
- Loading states provide clear feedback
- Icons are properly labeled for screen readers
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'accent', 'ghost', 'outline', 'danger'],
      description: 'The visual style variant of the button',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'The size of the button',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Whether the button is in a loading state',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the button is disabled',
    },
    iconPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
      description: 'Position of the icon relative to text',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Base story
export const Default: Story = {
  args: {
    children: 'Button',
  },
};

// Variants showcase
export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="accent">Accent</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All button variants with their psychological color associations.',
      },
    },
  },
};

// Sizes showcase
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Button sizes for different contexts and emphasis levels.',
      },
    },
  },
};

// With icons
export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button icon={<Home className="h-4 w-4" />} iconPosition="left">
        Dashboard
      </Button>
      <Button icon={<Upload className="h-4 w-4" />} iconPosition="right">
        Upload Policy
      </Button>
      <Button variant="outline" icon={<Download className="h-4 w-4" />} iconPosition="left">
        Download Report
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Buttons with icons provide visual context and improve scanability.',
      },
    },
  },
};

// Loading state
export const Loading: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button loading>Processing...</Button>
      <Button variant="secondary" loading>Saving...</Button>
      <Button variant="accent" loading>Analyzing...</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Loading states provide clear feedback during async operations.',
      },
    },
  },
};

// Disabled state
export const Disabled: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button disabled>Disabled Primary</Button>
      <Button variant="secondary" disabled>Disabled Secondary</Button>
      <Button variant="outline" disabled>Disabled Outline</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Disabled states clearly indicate when actions are not available.',
      },
    },
  },
};

// Interactive example
export const Interactive: Story = {
  args: {
    children: 'Click me!',
    variant: 'primary',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive button with configurable props. Use the controls to experiment with different combinations.',
      },
    },
  },
}; 