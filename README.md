# Validate-addon-name
![version](https://img.shields.io/badge/version-1.0.0-blue.svg)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/SlimIO/is/commit-activity)
![MIT](https://img.shields.io/github/license/mashape/apistatus.svg)

SlimIO Addon name validator/sanitizer. This package has been created to centralize **validation** and **sanitization** of addons names. So if tomorrow we decide to change the way addon name are constructed we only need to update the package everywhere.

## Requirements
- [Node.js](https://nodejs.org/en/) v10 or higher

## Getting Started

This package is available in the Node Package Repository and can be easily installed with [npm](https://docs.npmjs.com/getting-started/what-is-npm) or [yarn](https://yarnpkg.com).

```bash
$ npm i @slimio/validate-addon-name
# or
$ yarn add @slimio/validate-addon-name
```

## Usage example
```js
const assert = require("assert").strict;
const { validate, sanitize } = require("@slimio/validate-addon-name");

// Validate addon name
assert.equal(validate("Addon"), false);
assert.equal(validate("myaddon5"), true);
assert.equal(validate("1"), false);

// Sanitize addon name
assert.equal(sanitize("Addon-Name"), "addonname");
assert.equal(sanitize("??CPU-DB>>"), "cpudb");
```

## API

### validate(addonName: string): boolean
Validate and return a boolean to tell if the name is a valid and acceptable name for a SlimIO Addon. This method does not throw if **addonName** is not a string (it will return false instead).

```js
validate(10); // false
```

### function sanitize(addonName: string): string
Remove non-valid (wide) characters from a given string. This method will throw a TypeError if **addonName** is not a string primitive.

```js
sanitize(10); // Throw
```

## Dependencies
This project have no dependencies.

## License
MIT
