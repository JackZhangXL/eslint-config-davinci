# eslint-config-davinci

eslint config base on airbnb

support `ES6` and `JSX`

Name was taken from the Renaissance Leonardo da Vinci, every programmer is an artist~

# Installation

* install

`yarn add eslint-config-davinci eslint eslint-loader --dev`

* create file `.eslintrc` at root path

```json
{
    "extends": "eslint-config-davinci"
}
```

* add `package.json`

```json
{
  "scripts": {
    "lint": "eslint ./src"
  }
}
```

* add `webpack.config` (optional)

``` JavaScript
module: {
    // webpack 1.*
    loaders: [
        {
            enforce: 'pre',
            test: /\.js$/,
            include: [
                path.resolve(BASEDIR, 'src'),
            ],
            loader: 'eslint-loader',
        }
    ]
    // webpack 2.*
    rules: [
        {
            enforce: 'pre',
            test: /\.js$/,
            include: [
                path.resolve(BASEDIR, 'src'),
            ],
            loader: 'eslint-loader',
        }
    ]
},
```
