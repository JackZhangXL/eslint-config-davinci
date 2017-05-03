# eslint-config-davinci

eslint 配置文件

支持 `ES6` 和 `JSX`

项目名取自文艺复兴时期莱昂纳多.达.芬奇，每个程序员都是艺术家~

# Installation

* install

`yarn add eslint-config-davinci eslint eslint-loader --dev`

* 项目根目录新建文件 `.eslintrc`

```json
{
    "extends": "@dp/eslint-config-leonardo"
}
```

* `package.json` 里添加

```json
{
  "scripts": {
    "lint": "eslint ./src"
  }
}
```

* `webpack.config` 里添加

``` JavaScript
    module: {
        // webpack 1.* 写法
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
        // webpack 2.* 写法
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
