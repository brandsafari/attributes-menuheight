# Brandsafari Developer Starter

A starter template for Webflow projects.

Based on the Finsweet [developer-starter](https://github.com/finsweet/developer-starter), but simplified (no TypeScript, no Testing, standard npm instead of pnpm) to reduce complexity.

Before starting to work with this template, please take some time to read through the documentation.

## Reference

-  [Included tools](#included-tools)
-  [Requirements](#requirements)
-  [Getting started](#getting-started)
   -  [Installing](#installing)
   -  [Building](#building)
      -  [Serving files on development mode](#serving-files-on-development-mode)
      -  [Building multiple files](#building-multiple-files)
      -  [Setting up a path alias](#setting-up-a-path-alias)
-  [Contributing guide](#contributing-guide)
-  [Pre-defined scripts](#pre-defined-scripts)
-  [CI/CD](#cicd)
   -  [Continuous Integration](#continuous-integration)
   -  [Continuous Deployment](#continuous-deployment)
   -  [How to automatically deploy updates to npm](#how-to-automatically-deploy-updates-to-npm)

## Included tools

This template contains some preconfigured development tools:

-  [Prettier](https://prettier.io/): Code formatting that assures consistency across all projects.
-  [esbuild](https://esbuild.github.io/): Javascript bundler that compiles, bundles and minifies the original javascript files.
-  [Finsweet's TypeScript Utils](https://github.com/finsweet/ts-utils): Some utilities to help you in your Webflow development.

## Getting started

The quickest way to start developing a new project is by [creating a new repository from this template](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template#creating-a-repository-from-a-template).

Once the new repository has been created, update the `package.json` file with the correct information, specially the name of the package which has to be unique.

### Installing

After creating the new repository, open it in your terminal and install the packages by running:

```bash
npm install
```

It is also recommended that you install the following extensions in your VSCode editor:

-  [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Building

To build the files, you have two defined scripts:

-  `npm dev`: Builds and creates a local server that serves all files (check [Serving files on development mode](#serving-files-on-development-mode) for more info).
-  `npm build`: Builds to the production directory (`dist`).

### Serving files on development mode

When you run `npm dev`, two things happen:

-  esbuild is set to `watch` mode. Every time that you save your files, the project will be rebuilt.
-  A local server is created under `http://localhost:3000` that serves all your project files. You can import them in your Webflow projects like:

```html
<script defer src="http://localhost:3000/{FILE_PATH}.js"></script>
```

-  Live Reloading is enabled by default, meaning that every time you save a change in your files, the website you're working on will reload automatically. You can disable it in `/bin/build.js`.

### Building multiple files

If you need to build multiple files into different outputs, you can do it by updating the build settings.

In `bin/build.js`, update the `ENTRY_POINTS` array with any files you'd like to build:

```javascript
const entryPoints = [
   "src/home/index.ts",
   "src/contact/whatever.ts",
   "src/hooyah.ts",
   "src/home/other.ts",
]
```

This will tell `esbuild` to build all those files and output them in the `dist` folder for production and in `http://localhost:3000` for development.

### Setting up a path alias

Path aliases are very helpful to avoid code like:

```javascript
import example from "../../../../utils/example"
```

Instead, we can create path aliases that map to a specific folder, so the code becomes cleaner like:

```javascript
import example from "$utils/example"
```

You can set up path aliases using the `paths` setting in `jsconfig.json`. This template has two already predefined paths:

```json
{
   "paths": {
      "$utils/*": ["src/utils/*"],
      "@/*": ["src/*"]
   }
}
```

To avoid any surprises, take some time to familiarize yourself with the [jsconfig](/jsconfig.json) enabled flags.

## Pre-defined scripts

This template contains a set of predefined scripts in the `package.json` file:

-  `npm dev`: Builds and creates a local server that serves all files (check [Serving files on development mode](#serving-files-on-development-mode) for more info).
-  `npm build`: Builds to the production directory (`dist`).
-  `npm format`: Formats all the files in the codebase using Prettier. You probably won't need this script if you have automatic [formatting on save](https://www.digitalocean.com/community/tutorials/code-formatting-with-prettier-in-visual-studio-code#automatically-format-on-save) active in your editor.
-  `npm run update`: Scans the dependencies of the project and provides an interactive UI to select the ones that you want to update.
