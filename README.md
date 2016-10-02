# js-next
A JavaScript next generation apps scaffolder


Create *"next generation"* node apps with no hassle.

js-next will create for you a boilerplate with a minimal build system that it just leverages on npm capabilities.

It comes with support for:
  - [Flow](https://flowtype.org)
  - [Babel](https://babeljs.io)
  - [Jest](https://facebook.github.io/jest/)
  - [ESLint](http://eslint.org)
  
## Philosophy
Get the best of modern tools, using just what you know and with no hassle.

No external script or build systems, just the `npm scripts`.

## Installation
` npm install -g js-next `

## Usage
`js-next appName`

## NPM Scripts
`npm run prebuild`  - Flow check

`npm run lint`  - ESlint check

`npm run build`  - Build source in `src`

`npm test`  - Run Jest

## Roadmap
- [ ] `--no-jest` option
- [ ] `--no-eslint` option

