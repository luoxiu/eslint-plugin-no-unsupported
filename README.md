# eslint-plugin-no-unsupported

No unsupported features.

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
yarn i eslint --save-dev
```

Next, install `eslint-plugin-no-unsupported`:

```sh
yarn add eslint-plugin-no-unsupported --save-dev
```

## Usage

Add `no-unsupported` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-unsupported"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-unsupported/react-native/style-position": 2
    }
}
```

## Supported Rules

* Fill in provided rules here


