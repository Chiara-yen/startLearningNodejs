see `.travis.yml`

```yml
after_script: "npm install coveralls@2 && cat ./coverage/lcov.info | coveralls"
```
