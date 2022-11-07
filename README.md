# Client finder

This is a simple Client finder app.



## What's inside?


This turborepo uses [npm](https://www.npmjs.com/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app to display architectural reference, diagrams, etc
- `web`: another [Next.js](https://nextjs.org/) the web platform that users will interact with
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `api`: a [Nest.js](https://nestjs.com/) API that will serve the data to the `web` app
- `types`: a stub types package that will be used by the dependencies of the project
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo



### Develop

To develop all apps and packages, run the following command:

```
npm run dev
```

This will run `app`, `docs` and `api` services in parallel on ports `3000`, `3001` and `3002` respectivelly, so be sure these ports are free.


### Storybook

The packages "web" and "ui" contains its own storybook. Check them to see their components in isolation and access their development canvas.

To access Ui's storybook, go to:
```bash
$ cd packages/ui
$ npm run storybook
```

To access Web's storybook, go to:
```bash
$ cd packages/ui
$ npm run storybook
```

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
npm run build
```


