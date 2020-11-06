# rollup.js & itcss - front-end recipe

This recipe includes:
- Bundling [ES modules](https://developers.google.com/web/fundamentals/primers/modules) with [rollup.js](https://rollupjs.org/)
- JavaScript unit testing with [Jest](https://jestjs.io/)
- A css setup using the [itcss](https://itcss.io/) architecture transformed by [PostCSS](https://postcss.org/)

## Usage

- Clone this repo, download the zip file or use [`degit`](https://www.npmjs.com/package/degit): `npx degit vicompany/rollup-itcss`.
- In the root of the project run `npm ci` or `npm i`.
- The main entry points are:
    - [`source/scripts/index.mjs`](source/scripts/index.mjs)
    - [`source/styles/main.css`](source/styles/main.css)

## Tasks

### Development

To start the watchers and a [http-server](https://www.npmjs.com/package/http-server).

```bash
npm run dev
```

### Production build

 This will test and lint the source code and create the production builds.

```bash
npm run build
```

These scripts are configured in the [`package.json`](package.json).
