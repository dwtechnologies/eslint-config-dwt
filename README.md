eslint-config-dwt
=============

DWT lint config that extends [Standard](https://standardjs.com/).

## Installation
### yarn
``` sh
yarn add eslint-config-dwt --dev
```

### npm
``` sh
npm install --save-dev eslint-config-dwt
```

## Usage
Shareable configs are designed to work with the `extends` feature of `.eslintrc` files. You can learn more about [Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the official ESLint website.

To use the configuration in an empty project, first install it:
``` sh
yarn add eslint eslint-config-dwt --dev
# or...
npm install --save-dev eslint eslint-config-dwt
```

Then, add this to your `.eslintrc` config
```
{
  "extends": "dwt"
}
```

Lastly, to ease the use of `eslint`, add this to the `scripts` section of your `package.json`
```
"lint": "eslint '**/*.js' --ignore-path .gitignore"
```
