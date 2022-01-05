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
        "no-unsupported/react-native/style-vw-vh": "error",
        "no-unsupported/react-native/style-align-self": "error",
        "no-unsupported/react-native/style-border-self": "error",
        "no-unsupported/react-native/style-cursor": "error",
        "no-unsupported/react-native/style-z-index": "error",
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
| `no-unsupported/react-native/style-border-self` | react native only supports `borderStyle: solid\|dotted\|dashed` |
| `no-unsupported/react-native/style-cursor` | react native does not support `cursor` |
| `no-unsupported/react-native/style-z-index` | react native does not support `zIndex` with a string value |