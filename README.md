# Who Am I?

When I started thinking about building a portfolio site I wanted it to be unique and interactive. In my mind, a site meant to be an introduction should be like a conversation-- fun, interesting, and above all engaging. That's what has gone into the design of this experience, emulating a conversation.

To see the progress so far, check out [lanceturri.com](lanceturri.com).


## Getting Started

If you want to run the site locally, this project uses webpack-dev-server to test.

### Prerequisites

Make sure you have [node](https://nodejs.org/) and [yarn](https://yarnpkg.com/)installed.

```bash
$ node -v // => 8.x.x+
$ yarn -v // => 1.x.x+
```

### Installing

Once the prerequisites are installed, running `install` then `serve` will take care of all the necessary dependencies and spin up the site.

```bash
$ yarn install
$ yarn serve
```

After everything has built successfully, you will be able to access the site at `http://localhost:8080/`.


### Coding style

Consistent coding style is enforced through `stylelint` and `tslint`. To run the linting tasks together run `yarn lint`, or seperately with `yarn lint:ts` and `yarn lint:scss`.

```
// Runs both TS and SCSS lint tasks
$ yarn lint 

// Runs each individually
$ yarn lint:ts
$ yarn lint:scss
```

NOTE: Each linting task is run with the `--fix` flag which will attempt to automagically fix certain formatting errors.

## Built With

* [Vue.js](http://www.vuejs.org) - The web framework used
* [Webpack](https://webpack.js.org/) - Build pipeline
* [SCSS](https://sass-lang.com/) - CSS preprocessor
* [TypeScript](http://www.typescriptlang.org/) - JavaScript that scales!
