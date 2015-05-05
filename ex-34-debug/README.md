### debug main

`npm run debug-main` or `DEBUG=app:main node main.js`

### debug a

`npm run debug-a` or `DEBUG=app:a node main.js`

### debug b

`npm run debug-b` or `DEBUG=app:b node main.js`

### debug c

`npm run debug-c` or `DEBUG=app:c node main.js`

### debug app

`npm run debug-app` or `DEBUG=app:* node main.js`

### scripts

```json
"scripts": {
  "start": "node main.js",
  "debug-main": "DEBUG=app:main node main.js",
  "debug-a": "DEBUG=app:a node main.js",
  "debug-b": "DEBUG=app:b node main.js",
  "debug-c": "DEBUG=app:c node main.js",
  "debug-app": "DEBUG=app:* node main.js",
  "test": "echo \"Error: no test specified\" && exit 1"
},
```
