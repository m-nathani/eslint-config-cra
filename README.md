# ESLint (and Prettier) config of Create react app

These are settings for ESLint and Prettier only used witht CRA.

## What it does

This setup lints your JavaScript code based on practices. Check the [.eslintrc.js](https://github.com/m-nathani/eslint-config-cra/blob/main/.eslintrc.js) file to see what is included. Feel free to override the rules that make sense for you.

## Installing

1. In your project folder, run:

```
npm i -D eslint-config-cra
```

2. You will see several dependencies were installed. Now, create (or update) a `.eslintrc` file with the following content:

```js
{
  'extends': [
    'eslint-config-cra'
  ]
}
```

3. Make sure the [.prettierrc](https://github.com/m-nathani/eslint-config-cra/blob/main/.prettierrc) to be same as the [prettier-config-cra](https://github.com/m-nathani/prettier-config-cra.git) repository

---

This repository is inspired by [eslint-config-wesbos](https://github.com/wesbos/eslint-config-wesbos).


## License
eslint-config-cra is open source software licensed as MIT.
