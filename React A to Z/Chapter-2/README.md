# Chapter 2

- Initialize npm

  - use `npm init` to create a configuration file called `package.json`.

- Install and configure bundler

  - install parcel (alternative to webpack) bundler as a dev dependency using `npm i -D parcel`
  - Add .gitignore file and add the path of the folder or files that need not be pushed to the code repository.
  - Add a copy of HTML and JS file that we used in chapter-1
  - Run `npx parcel index.html` to run the parcel bundler (It will create a dev build in dist folder and a .parcel-cache folder for cashing the build)

- Production Build
  - Remove the main (name) from the `package.json` because we are passing the entry point with parcel.
  - Run `npx parcel build index.html`
  - Add the browserslist in package.json for differential bundling.
