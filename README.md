# Vite + Wyw + Storybook Issue

## Prerequisites

- [Node.js](https://nodejs.org/) (v22 or newer recommended)
- [PNPM](https://pnpm.io/) package manager

## Installation

```bash
# Clone the repository
git clone https://github.com/wolt-kgarg/wyw-vite-storybook-issue.git
cd wyw-vite-storybook-issue

# Install dependencies
pnpm install
```

To reproduce the Storybook issue:

1. Run `pnpm storybook`
2. Navigate to http://localhost:6006/
3. Open the Button story (or directly open http://localhost:6006/?path=/story/example-button--primary)

An error appears in the terminal:

```
Internal server error: __STORYBOOK_MODULE_ACTIONS__ is not defined in Button.stories.tsx
```
