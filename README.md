# knotel-website-ui

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/knotel-website-ui.svg)](https://www.npmjs.com/package/knotel-website-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save knotel-website-ui
```

## Usage

```jsx
import React, { Component } from "react";

import MyComponent from "knotel-website-ui";
import "knotel-website-ui/dist/index.css";

class Example extends Component {
  render() {
    return <MyComponent />;
  }
}
```

## 


## Package
1. check the package.json to see what the version is
1. update package.json's version to the next version e.g. 1.4.15 -> 1.4.16 (this is very important--otherwise it gets detected as the same NPM module version)
1. from the root dir run `yarn run build`
1. manually crete a folder called "package" and copy/paste the package.json, readme.md, and dist folder into it
1. from the root dir, run: tar -cvzf knotel-website-ui-v1.4.16.tgz package/
1. publish
1. update new-website with new reference
1. fin
## License

MIT © [](https://github.com/)
