See [umd (Universal Module Definition)](https://github.com/umdjs/umd)

To write module supports `AMD`, `CommonJS`, `Global` at the same time

Code Look like:

```js
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery", "underscore"], factory);
    } else if (typeof exports === "object") {
        module.exports = factory(require("jquery"), require("underscore"));
    } else {
        root.App = factory(root.$, root._);
    }
}(this, function ($, _) {

    // module implementation

    var App = { // ... };

    return App;
}));
```

Use browserify `--standalone` to build standalone `umd` module

```bash
npm install -g browserify

browserify app.js --standalone app > app-umd.js
```
