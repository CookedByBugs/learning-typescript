# Project overview

This repository contains a minimal front-end setup using TypeScript, HTML, and Tailwind CSS.

## Development

During development you should run two processes so that source changes are compiled automatically:

- `npm run tsc` — starts the TypeScript compiler in watch mode and continuously emits JavaScript when your `.ts` files change.
- `npm run css` — starts Tailwind CSS in watch/build mode and regenerates the stylesheet when your templates or CSS change.

Run each command in its own terminal so you can see their output and stop them independently. Example (PowerShell):

```
npm run tsc
npm run css
```

If you prefer a single command to run both processes concurrently, you can use a small process manager such as `concurrently`:

```
# install once as a dev dependency
npm install --save-dev concurrently

# add a script to package.json, for example:
# "dev": "concurrently \"npm run tsc\" \"npm run css\""

# then run
npm run dev
```

Notes
- These instructions assume `package.json` already defines `tsc` and `css` scripts. If not, add them according to your build setup.
- Stop either process with Ctrl+C in its terminal.

This section provides the minimal steps to keep TypeScript and Tailwind running while you develop.