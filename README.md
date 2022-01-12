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
    "extends": [
        "plugin:no-unsupported/react-native",
    ],
    "plugins": [
        "no-unsupported"
    ],
}
```

## Supported Rules

| Rule | Description |
| --- | --- |
| `no-unsupported/rn-style-position` | react native only supports `position: absolute\|relative` |
| `no-unsupported/rn-style-calc` | react native does not support `calc` |
| `no-unsupported/rn-style-vm-vh` | react native does not support `vw` and `vh` |
| `no-unsupported/rn-style-align-self` | react native only supports `alignSelf: auto\|flex-start\|flex-end\|center\|baseline\|stretch` |
| `no-unsupported/rn-style-border-style` | react native only supports `borderStyle: solid\|dotted\|dashed` |
| `no-unsupported/rn-style-cursor` | react native does not support `cursor` |
| `no-unsupported/rn-style-z-index` | react native does not support `zIndex` with a string value |
| `no-unsupported/rn-style-white-space` | react native does not support `whiteSpace` |
