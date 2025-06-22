# Debugging Node Modules in Storybook

This guide explains how to debug node modules while running Storybook in this project.

## Running Storybook with Node.js Inspector Enabled

To debug node modules while running Storybook, use the following command:

```bash
pnpm run debug-storybook
```

This will start Storybook with the Node.js inspector enabled, allowing you to debug into node modules.

## Connecting a Debugger

### Using Chrome DevTools

1. Start Storybook with the debug option: `pnpm run debug-storybook`
2. Open Chrome and navigate to `chrome://inspect`
3. Click on "Open dedicated DevTools for Node"
4. The debugger will automatically connect to the Node.js process

### Using VS Code

1. Add the following configuration to your `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "Attach to Storybook",
      "port": 9229,
      "skipFiles": ["<node_internals>/**"]
    }
  ]
}
```

2. Start Storybook with the debug option: `pnpm run debug-storybook`
3. In VS Code, go to the Run and Debug panel (Ctrl+Shift+D or Cmd+Shift+D)
4. Select "Attach to Storybook" from the dropdown
5. Click the green play button to attach the debugger

## Setting Breakpoints

You can set breakpoints in node modules by:

1. Opening the node module file in your editor
2. Clicking in the gutter to add a breakpoint
3. When the code runs, execution will pause at the breakpoint

## Debugging @wyw-in-js/transform

Since you're specifically looking at `/Users/kgarg/learn/vite-linaria-storybook/node_modules/.pnpm/@wyw-in-js+transform@0.7.0_typescript@5.8.3/node_modules/@wyw-in-js/transform/esm/module.js`, you can:

1. Open this file in your editor
2. Set breakpoints at the lines you want to debug
3. Run the debug-storybook script
4. The debugger will pause when it hits your breakpoints

## Troubleshooting

If you have issues setting breakpoints in node modules:

1. Make sure source maps are enabled in your debugger
2. Try using the "step into" functionality when debugging to step into node module functions
3. Check if the module is being processed by a bundler or if it's being used directly

For specific issues with @wyw-in-js/transform, you may need to check how the module is being loaded and processed by the Vite plugin.
