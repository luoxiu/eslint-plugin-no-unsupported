# eslint-plugin-no-unsupported

Do not use unsupported features.

## Installation

```sh
yarn i eslint eslint-plugin-no-unsupported --save-dev
```

## Usage

Configure it in `.eslintrc.js` or `.eslintrc.json`:

```json
{
    "plugins": [
        "no-unsupported"
    ],
    "rules": {
        "no-unsupported/react-native/style-position": "error",
        "no-unsupported/react-native/style-calc": "error",
        "no-unsupported/react-native/style-vm-vh": "error"
    }
}
```

## Supported Rules

| Rule | Description |
| --- | --- |
| `no-unsupported/react-native/style-position` | react native only supports `position: absolute\|relative` |
| `no-unsupported/react-native/style-calc` | react native does not support `calc` |
| `no-unsupported/react-native/style-vm-vh` | react native does not support `vw` and `vh` |
| `no-unsupported/react-native/style-align-self` | react native only supports `alignSelf: auto\|flex-start\|flex-end\|center\|baseline\|stretch` |
| `no-unsupported/react-native/style-border-self` | react native only supports `borderStyle: solid|dotted|dashed` |
