# client

This project was originally generated with [Angular CLI](https://github.com/angular/angular-cli) on Angular 20.

## Development Tools used for this app on december 2024

- [Install NVM for different versions of NodeJS)](https://github.com/coreybutler/nvm-windows/releases)
- In terminal `nvm install 22.14.0` and `nvm use 22.14.0`

- [Angular CLI v20)](https://www.npmjs.com/package/@angular/cli): `npm i -g @angular/cli@20`
- [Visual Studio Code](https://code.visualstudio.com/)

## Favorite extensions and settings

- [MarkDown Lint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
- [Angular Language Service](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template)
- In settings 'brackets', activate Bracket Pair Colorization and Editor guides true
- In settings 'auto close', set 'Auto Closing Brackets' and 'Auto Closing Quotes' to 'always'

## Angular ssl

### On windows as administator open powershell

```bash
chock install mkcert
mkcert -install
```

### In a ssl folder create the certificat

```bash
mkdir ssl
cd ssl
mkcert localhost
```

### angular.json

In the serve section add options and refer to the certificat

```json
"options": {
    "ssl": true,
    "sslCert": "./ssl/localhost.pem",
    "sslKey": "./ssl/localhost-key.pem"
  },
```

## Angular Material

To install Angular Material, run the following command in your terminal:

```bash
ng add @angular/material
```

This command will prompt you to choose a theme, set up global typography styles, and set up animations. You can select the options that best suit your project.

## Tailwind CSS

To install Tailwind CSS, run the following command in your terminal:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Then, add the following content to your `tailwind.config.js` file:

```json
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

This command will set up Tailwind CSS in your Angular project, including the necessary configuration files and dependencies.

### TODO

- [Angular Files](https://marketplace.visualstudio.com/items?itemName=alexiv.vscode-angular2-files)
- [Angular 2 TypeScript Snippets](https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2)
- [Angular2-switcher](https://marketplace.visualstudio.com/items?itemName=infinity1207.angular2-switcher)
- ASM Code Lens
- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
- [Auto Import](https://marketplace.visualstudio.com/items?itemName=steoates.autoimport)
- [Auto-Open Markdown Preview](https://marketplace.visualstudio.com/items?itemName=huntertran.autoopen-markdown-preview)
- [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)
- [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)
- C# Extensions for Visual Studio Code (powered by OmniSharp) - C/C++ Extensions for Visual Studio Code (powered by Microsoft)
- Ionic
- LaTeX Workshop - LaTeX language support, compiling, viewing, and IntelliSense for Visual Studio Code.
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
- [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)
- [Markdown Shortcuts](https://marketplace.visualstudio.com/items?itemName=mdickin.markdown-shortcuts)
- [Markdown Table Prettify](https://marketplace.visualstudio.com/items?itemName=darkriszty.markdown-table-prettify)
- [Markdown Theme Kit](https://marketplace.visualstudio.com/items?itemName=ms-vscode.Theme-MarkdownKit)
- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
- Path Intellisense - Visual Studio Code plugin that autocompletes filenames
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- solidity - Solidity language support for Visual Studio Code

## Updating to latest Angular 21

This app is now on Angular 21.

### update app to latest Angular 21

`ng update @angular/cli@21 @angular/core@21`

### update from older Angular versions to the latest

Follow the instructions in the [Angular Update Guide](https://update.angular.io/) to fix your app.

Please note that then the --force flag is mostly required to be sure that the update command runs even if there are dependency conflicts for thirth party libraries.

### standalone components

You can switch older Angular programs to standalone with `ng generate @angular/core:standalone`

#### npm outdated

In terminal use `npm outdated` to see what packages are requiring updates and what their current and wanted versions are.

This will also show you which packages are deprecated.

If you want to update a package to a version newer than what is specified in your package.json, you can do so by running npm update [package-name]@[version-number].

### vulnerabilities

In terminal use `npm audit fix` to automatically install compatible updates to vulnerable dependencies.

You can first run `npm audit` to see vulnerabilities in your project for one or more packages.

Run `npm ls [package-name]` to see which packages depend on the vulnerable package.

### avoiding npm install errors

If you get dependencies errors when running `npm install`, you can try to override the error by adding the following to your package.json:

for example:

```json
"ng2-file-upload": "^5.0.0"
```

can be overridden with:

```json
"overrides": {
    "ng2-file-upload": {
      "@angular/common": "$@angular/common",
      "@angular/core": "$@angular/core"
    }    
  }
```

### Use latest global Angular CLI

`npm i -g @angular/cli`

## Some examples creating components and services

```bash
ng g c layout/header --skip-tests
ng g s core/services/shop-service --skip-tests
```

### client identity

To create client identity functionality, you can run the following commands to generate components and service:

```bash
ng g c features/account/login --skip-tests
ng g c features/account/register --skip-tests
ng g s core/services/account-service --skip-tests

```

## Stripe

To integrate Stripe, you can run the following command to install the Stripe package:

```bash
npm install @stripe/stripe-js
```

Then, you can create a service to handle Stripe payments:

```bash
ng g s core/services/stripe-service --skip-tests
```
