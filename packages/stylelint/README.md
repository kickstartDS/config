# kickstartDS Stylelint config

## Installation

```
npm install --save-dev stylelint postcss postcss-scss @kickstartds/stylelint-config
```

or

```
yarn add --dev stylelint postcss postcss-scss @kickstartds/stylelint-config
```

## Usage

Create a `.stylelintrc.js` [config file](https://stylelint.io/user-guide/configuration):

```js
module.exports = {
  extends: "@kickstartds/stylelint-config",
};
```

Add a script to your `package.json` to run stylelint:

```json
{
  "scripts": {
    "stylelint": "stylelint \"**/*.scss\""
  }
}
```

## Contributing

Unless you explicitly state otherwise, any contribution intentionally submitted
for inclusion in the work by you, as defined in the Apache-2.0 license, shall be
dual licensed as below, without any additional terms or conditions.

## License

&copy; Copyright 2022 Jonas Ulrich, kickstartDS by ruhmesmeile GmbH [jonas.ulrich@kickstartds.com].

This project is licensed under either of

- [Apache License, Version 2.0](https://www.apache.org/licenses/LICENSE-2.0) ([`LICENSE-APACHE`](LICENSE-APACHE))
- [MIT license](https://opensource.org/licenses/MIT) ([`LICENSE-MIT`](LICENSE-MIT))

at your option.

The [SPDX](https://spdx.dev) license identifier for this project is `MIT OR Apache-2.0`.
